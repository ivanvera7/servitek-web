'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, Mail, ArrowRight } from 'lucide-react';
import { serviceOptions, whatsappMessageTemplate } from '@/data/contact';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { company } from '@/data/company';
import { trackFormSubmit, trackWhatsAppClick } from '@/lib/analytics';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Escriba su nombre completo'),
  company: z.string().min(2, 'Escriba el nombre de su empresa'),
  phone: z
    .string()
    .regex(/^[\d\s()+-]{7,20}$/, 'Escriba un teléfono válido, por ejemplo 0981 118743'),
  city: z.string().min(2, 'Escriba su ciudad'),
  serviceType: z.string().min(1, 'Elija el servicio que necesita'),
  message: z
    .string()
    .min(10, 'Describa su necesidad con algo más de detalle (mínimo 10 caracteres)'),
  privacy: z.literal(true, {
    errorMap: () => ({ message: 'Debe aceptar la Política de Privacidad para continuar' }),
  }),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * `.field` vive en globals.css junto al resto de tokens de superficie: fondo,
 * radio, foco y transición son los mismos en todos los campos del sitio.
 * Aquí solo se decide el color del borde según haya error o no.
 */
const inputBase = 'field';

/** Rojo accesible sobre los fondos oscuros del sitio (6,1:1 sobre #0b253f). */
const errorText = 'mt-1.5 flex items-start gap-1.5 text-sm text-danger';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { honeypot: '' },
  });

  const onSubmit = (data: ContactFormData) => {
    trackFormSubmit('contact_form');
    trackWhatsAppClick();
    // window.open tras validación asíncrona lo bloquean algunos navegadores
    // móviles. Se navega en la misma pestaña como respaldo si eso ocurre.
    const url = generateWhatsAppUrl(whatsappMessageTemplate(data));
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = url;
    setSent(true);
    reset();
  };

  /** Lleva el foco al primer campo inválido, como espera un lector de pantalla. */
  const onInvalid = (formErrors: typeof errors) => {
    const first = (Object.keys(formErrors) as Array<keyof ContactFormData>)[0];
    if (first) setFocus(first);
  };

  const fieldProps = (name: keyof ContactFormData) => ({
    'aria-invalid': errors[name] ? ('true' as const) : ('false' as const),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `${inputBase} ${errors[name] ? 'border-danger' : 'border-line-strong'}`,
  });

  return (
    <div>
      {sent && (
        <div
          role="status"
          className="mb-8 flex animate-rise items-start gap-3 rounded-2xl border border-success/40 bg-success/10 p-5"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
          <div className="text-sm text-chrome-2">
            <p className="font-semibold text-chrome">Se abrió WhatsApp con su consulta.</p>
            <p className="mt-1">
              Recuerde pulsar enviar dentro de WhatsApp para que nos llegue. Si no se abrió,
              escríbanos a{' '}
              <a
                href={`mailto:${company.contact.email}`}
                className="text-volt-text underline underline-offset-2"
              >
                {company.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="space-y-7">
        <div>
          <label htmlFor="name" className="field-label">
            Nombre completo <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Su nombre"
            {...register('name')}
            {...fieldProps('name')}
          />
          {errors.name && (
            <p id="name-error" className={errorText}>
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="field-label">
            Empresa <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="company"
            autoComplete="organization"
            placeholder="Nombre de la empresa"
            {...register('company')}
            {...fieldProps('company')}
          />
          {errors.company && (
            <p id="company-error" className={errorText}>
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {errors.company.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="field-label">
              Teléfono <span aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              autoComplete="tel"
              inputMode="tel"
              placeholder="0981 118743"
              {...register('phone')}
              {...fieldProps('phone')}
            />
            {errors.phone && (
              <p id="phone-error" className={errorText}>
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="field-label">
              Ciudad <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="city"
              autoComplete="address-level2"
              placeholder="Asunción"
              {...register('city')}
              {...fieldProps('city')}
            />
            {errors.city && (
              <p id="city-error" className={errorText}>
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {errors.city.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className="field-label">
            Tipo de servicio <span aria-hidden="true">*</span>
          </label>
          <select id="serviceType" {...register('serviceType')} {...fieldProps('serviceType')}>
            <option value="" className="bg-ink">
              Elija un servicio
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="bg-ink">
                {option}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p id="serviceType-error" className={errorText}>
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {errors.serviceType.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            Mensaje <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Describa su necesidad técnica..."
            {...register('message')}
            {...fieldProps('message')}
          />
          {errors.message && (
            <p id="message-error" className={errorText}>
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Anti-spam: invisible para personas, sin foco ni lectura asistida. */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          {...register('honeypot')}
        />

        <div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              {...register('privacy')}
              aria-invalid={errors.privacy ? 'true' : 'false'}
              aria-describedby={errors.privacy ? 'privacy-error' : undefined}
              className="mt-px h-6 w-6 shrink-0 cursor-pointer accent-volt-solid"
            />
            <label htmlFor="privacy" className="cursor-pointer py-1 text-sm text-chrome-2">
              He leído y acepto la Política de Privacidad <span aria-hidden="true">*</span>
            </label>
          </div>
          <p className="mt-1.5 pl-8 text-sm">
            <Link
              href="/politica-de-privacidad"
              className="text-volt-text underline underline-offset-2"
            >
              Leer la Política de Privacidad
            </Link>
          </p>
          {errors.privacy && (
            <p id="privacy-error" className={errorText}>
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {errors.privacy.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-chrome min-h-14 w-full">
          {isSubmitting ? (
            <>
              {/* Indicador de envío: anillo girando, no un cambio de texto seco. */}
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink"
              />
              Enviando
            </>
          ) : (
            <>
              Enviar por WhatsApp
              <ArrowRight className="btn-icon h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-chrome-muted">
          Al enviar se abrirá WhatsApp con sus datos ya escritos. Debe pulsar enviar allí para que
          la consulta nos llegue.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-line pt-5 text-center text-sm text-chrome-2">
          <Mail className="h-4 w-4 shrink-0 text-volt-text" aria-hidden="true" />
          <span>¿Prefiere el correo? Escríbanos a</span>
          <a
            href={`mailto:${company.contact.email}`}
            className="break-all text-volt-text underline underline-offset-2"
          >
            {company.contact.email}
          </a>
        </div>
      </form>
    </div>
  );
}
