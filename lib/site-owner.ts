/** Legal / contact details for the operator of Elite Solution (display in ALL CAPS where shown to users). */
export const SITE_OWNER_NAME = "AMAN KUMAR";
export const SITE_OWNER_EMAIL = "ddshotaman@gmail.com";
/** Digits after +91 (no spaces). */
export const SITE_OWNER_PHONE_LOCAL = "9140400259";
/** Country code + number for tel: and wa.me (no +). */
export const SITE_OWNER_PHONE_E164 = `91${SITE_OWNER_PHONE_LOCAL}`;

export const SITE_LEGAL_NAME = "Elite Solution";

export function siteCopyrightNotice(year: number): string {
  return `© ${year} ${SITE_LEGAL_NAME} | Owned and operated by ${SITE_OWNER_NAME}.`;
}
