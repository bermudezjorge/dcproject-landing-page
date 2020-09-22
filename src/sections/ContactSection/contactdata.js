const SHARED_CONTACT_DATA = [
  {
    text: "Santiago, Metropolitano de Santiago, Chile",
    icon: "map",
    important: false,
  },
  {
    text: "+56946106225",
    icon: "phone",
    important: true,
  },
  {
    text: "berlysurvey@gmail.com",
    icon: "mail-bulk",
    important: true,
  },
  {
    text: "9:00-19:00",
    icon: "clock",
    important: false,
  },
];

export const CONTACT_DATA = {
  es: [
    ...SHARED_CONTACT_DATA,
    {
      text: "Lunes-Viernes",
      important: false,
      icon: "calendar",
    },
  ],
  en: [
    ...SHARED_CONTACT_DATA,
    {
      text: "Monday-Friday",
      important: false,
      icon: "calendar",
    },
  ],
};

const SHARED_FORM_INFO = [
  {
    tag: "textarea",
    type: "textarea",
    name: "message",
    required: true,
  },
  {
    tag: "input",
    type: "file",
    name: "file",
    required: true,
  },
  {
    tag: "input",
    type: "number",
    name: "phone",
    required: false,
  },
  {
    tag: "input",
    type: "email",
    name: "email",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    name: "name",
    required: true,
  },
];

export const FORM_INFO = {
  es: [
    {
      ...SHARED_FORM_INFO[0],
      label: "¿En que podemos ayudarle?",
      placeholder: "Escribanos su mensaje",
    },
    {
      ...SHARED_FORM_INFO[1],
      label: "¿Quieres adjuntar un archivo?",
      placeholder: "",
    },
    {
      ...SHARED_FORM_INFO[2],
      label: "Teléfono de contacto",
      placeholder: "(Opcional)",
    },
    {
      ...SHARED_FORM_INFO[3],
      label: "Email",
      placeholder: "Email al cual responderle",
    },
    {
      ...SHARED_FORM_INFO[4],
      label: "¿Cúal es su nombre?",
      placeholder: "Escriba su nombre",
    },
  ],
  en: [
    {
      ...SHARED_FORM_INFO[0],
      label: "What can we help you?",
      placeholder: "Write us a message",
    },
    {
      ...SHARED_FORM_INFO[1],
      label: "Want to upload a file?",
      placeholder: "",
    },
    {
      ...SHARED_FORM_INFO[2],
      label: "Contact phone number",
      placeholder: "(Optional)",
    },
    {
      ...SHARED_FORM_INFO[3],
      label: "Email",
      placeholder: "Email to replay",
    },
    {
      ...SHARED_FORM_INFO[4],
      label: "What's your name?",
      placeholder: "Write down your name",
    },
  ],
};
