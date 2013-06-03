/**
 * Maya interview content:
 * - Text which appears as page titles on the video buttons
 * - Spanish translations
 *
 * To select a content set for a kiosk, set the component_name value in config/config.json
 * to match an object name here.
 *
 * OBJECTS:
 * - glyph_decipher
 * - day_keepers
 * - sites_today
 * - ballgame
 * - weaving
 * - agriculture
 * - human_remains
 */

var glyph_decipher = {
  PageTitle : "Learn more about decipherment",
  PageTitleSpanish : "",
  MediaFolder : "glyph_decipher",
  Videos : [
    {
      Prompt : "What is the value of learning to read the glyphs?",
      SpanishPrompt: "¿Cuál es el valor de aprender a leer los glifos?"
    },
    {
      Prompt : "Why is learning the glyphs important to the modern Maya?",
      SpanishPrompt: "¿Por qué es el aprendizaje de los glifos importantes para los mayas modernos?"
    },
    {
      Prompt : "Is there a connection between language and identity?",
      SpanishPrompt: "¿Existe alguna relación entre el lenguaje y la identidad?"
    },
    {
      Prompt : "How is the language written?",
      SpanishPrompt: "¿Cómo se escribe el idioma?"
    }
  ]
};

var day_keepers = {
  PageTitle : "Learn more about daykeepers",
  PageTitleSpanish : "",
  MediaFolder : "day_keepers",
  Videos : [
    {
      Prompt : "What is a daykeeper?",
      SpanishPrompt: "¿Por qué hacer un seguimiento del calendario viejo?"
    },
    {
      Prompt : "How important is your birthday?",
      SpanishPrompt: "¿Cómo están relacionados con la adivinación y el calendario?"
    },
    {
      Prompt : "How is the calendar used for divination?",
      SpanishPrompt: "¿Cuáles son los deberes contadores de los días?"
    },
    {
      Prompt : "What are the meanings of the days?",
      SpanishPrompt: "¿Cómo es el calendario antiguo utilizado hoy en día?"
    }
  ]
};

var sites_today = {
  PageTitle : "Learn more about archaeological sites",
  PageTitleSpanish : "",
  MediaFolder : "sites_today",
  Videos : [
    {
      Prompt : "How do lasers help you find undiscovered sites?",
      SpanishPrompt: "¿Cómo rayos láser ayudarle a encontrar sitios por descubrir?",
    },
    {
      Prompt : "What were these cities like when people lived there?",
      SpanishPrompt: "¿Cuáles eran estas ciudades como cuando la gente vivía allí?"
    },
    {
      Prompt : "Why were Maya cities abandoned?",
      SpanishPrompt: "¿Por qué fueron abandonadas las ciudades mayas?"
    },
    {
      Prompt : "Why do we preserve and visit Maya sites?",
      SpanishPrompt: "¿Por qué conservar y visitar sitios mayas de hoy?"
    }
  ]
};

var ballgame = {
  PageTitle : "Learn more about the ball game",
  PageTitleSpanish : "",
  MediaFolder : "ballgame",
  Videos : [
    {
      Prompt : "How did the Maya play this game?",
      SpanishPrompt: "¿Por qué y cómo los mayas jugar el juego?"
  },
    {
      Prompt : "Do people still play today?",
      SpanishPrompt: "¿La gente todavía juegan hoy en día?"
    },
    {
      Prompt : "How were the balls made?",
      SpanishPrompt: "¿Cómo se hacen las bolas?"
    },
    {
      Prompt : "Who were the Hero Twins?",
      SpanishPrompt: "¿Quiénes fueron los héroes gemelos?"
    }
  ]
};

var weaving = {
  PageTitle : "Learn more about weaving",
  PageTitleSpanish : "",
  MediaFolder : "weaving",
  Videos : [
    {
      Prompt : "How do people learn to weave?",
      SpanishPrompt: "¿Cómo las mujeres mayas aprender a tejer?"
  },
    {
      Prompt : "How old are the patterns and techniques?",
      SpanishPrompt: "¿Qué conexiones existen para los antiguos mayas tejen?"
    },
    {
      Prompt : "What do the patterns mean?",
      SpanishPrompt: "¿Cómo diseños reflejan la visión maya del mundo?"
    },
    {
      Prompt : "Why is weaving still important?",
      SpanishPrompt: "¿Por qué es importante para los mayas hoy?"
    }
  ]
};

var agriculture = {
  PageTitle : "Learn more about agriculture",
  PageTitleSpanish : "",
  MediaFolder : "agriculture",
  Videos : [
    {
      Prompt : "What was life like outside of the city centers?",
      SpanishPrompt: "¿Qué era la vida fuera de un centro de la ciudad?"
  },
    {
      Prompt : "What do we know about Maya markets?",
      SpanishPrompt: "¿Qué sabemos acerca de los mercados antiguos mayas?"
    },
    {
      Prompt : "What was ancient Maya agriculture like?",
      SpanishPrompt: "¿Cuántas personas vivían en las ciudades y cómo los agricultores a alimentar?"
    },
    {
      Prompt : "How did the Maya change their environment?",
      SpanishPrompt: "¿Tiene granja alguien hoy como lo hicieron en el período clásico?"
    }
  ]
};

var human_remains = {
  PageTitle : "Learn more about human remains",
  PageTitleSpanish : "",
  MediaFolder : "human_remains",
  Videos : [
    {
      Prompt : "What do bones reveal about a society?",
      SpanishPrompt: "¿Qué aprendemos mediante el estudio de los restos humanos?"
  },
    {
      Prompt : "How did the Maya bury their dead?",
      SpanishPrompt: "¿Dónde están los cuerpos?"
    },
    {
      Prompt : "What’s it like to discover a tomb?",
      SpanishPrompt: "¿Qué prácticas funerarias usó el Maya?"
    },
    {
      Prompt : "What do bones reveal about diet?",
      SpanishPrompt: "¿Qué se siente al descubrir una tumba?"
    }
  ]
};
