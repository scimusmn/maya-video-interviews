/**
 * Maya interview content:
 * - Text which appears as page titles on the video buttons,
 * - Media files - video files and button images.
 *
 * Be sure to include both English and Spanish translations!
 *
 * To select a content set for a kiosk, set the component_name value in config/config.json
 * to match an object name here.
 *
 */

var weaving = {
  PageTitle : "",
  PageTitleSpanish : "",
  MediaFolder : "weaving",
  Screensaver : "screensaver.mp4",
  Videos : [
    {
      Prompt : "How do people learn to weave?",
      SpanishPrompt: "¿Cómo se aprende a tejer?",
      File : "",
      Image : "video1.png"
    },
    {
      Prompt : "How is the weaving today connected to the ancient maya?",
      SpanishPrompt: "¿Cómo es en la actualidad el tejido conectado a los antiguos mayas?",
      File : "",
      Image : "video2.png"
    },
    {
      Prompt : "Why is weaving important to the Mayan culture today?",
      SpanishPrompt: "¿Por qué es importante el tejido de la cultura Maya hoy?",
      File : "",
      Image : "video3.png"
    },
    {
      Prompt : "What do the patterns mean?",
      SpanishPrompt: "¿Qué significan los patrones?",
      File : "",
      Image : "video4.png"
    }
  ]
};

var sites_today = {
  PageTitle : "There are many reasons to investigate and preserve ancient Maya sites",
  PageTitleSpanish : "Hay muchos motivos de investigar y conservar sitios mayas antiguos",
  MediaFolder : "sites_today",
  Screensaver : "screensaver.mp4",
  Videos : [
    {
      Prompt : "How do lasers help you find undiscovered sites?",
      SpanishPrompt: "¿Cómo rayos láser ayudarle a encontrar sitios por descubrir?",
      File : "1115_Chip_012.mp4",
      Image : "video1.png"
    },
    {
      Prompt : "What was a Maya city like when people still lived there?",
      SpanishPrompt: "Lo que era una ciudad Maya como cuando las personas viven aún?",
      File : "1115_Chip_014.mp4",
      Image : "video2.png"
    },
    {
      Prompt : "Why were Maya cities abandoned?",
      SpanishPrompt: "¿Por qué fueron abandonadas las ciudades mayas?",
      File : "1115_Chip_018.mp4",
      Image : "video3.png"
    },
    {
      Prompt : "Why do we preserve and visit Maya sites today?",
      SpanishPrompt: "¿Por qué conservar y visitar sitios mayas de hoy?",
      File : "1115_Chip_022.mp4",
      Image : "video4.png"
    }
  ]
};
