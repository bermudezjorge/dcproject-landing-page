const SHARED_CONTACT_DATA = [
  {
    text: "Santiago, Metropolitano de Santiago, Chile",
    important: false,
  },
  {
    text: "+56946106225",
    important: true,
  },
  {
    text: "berlysurvey@gmail.com",
    important: true,
  },
  {
    text: "9:00-19:00",
    important: false,
  },
];

export const CONTACT_DATA = {
  es: [
    ...SHARED_CONTACT_DATA,
    {
      text: "Lunes-Viernes",
      important: false,
    },
  ],
  en: [
    ...SHARED_CONTACT_DATA,
    {
      text: "Monday-Friday",
      important: false,
    },
  ],
};

const SHARED_FORM_INFO = [
  {
    tag: "textarea",
    type: "textarea",
    required: true,
  },
  {
    tag: "input",
    type: "file",
    required: true,
  },
  {
    tag: "input",
    type: "number",
    required: false,
  },
  {
    tag: "input",
    type: "email",
    required: true,
  },
  {
    tag: "input",
    type: "text",
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
