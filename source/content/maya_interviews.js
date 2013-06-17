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
  PageTitleSpanish : "Aprende más sobre desciframiento",
  MediaFolder : "glyph_decipher",
  Videos : [
    {
      Prompt : "Why is learning the glyphs important to scholars?",
      SpanishPrompt: "¿Por qué es importante para los académicos aprender sobre los glifos?"
    },
    {
      Prompt : "Why is learning the glyphs important to Maya people?",
      SpanishPrompt: "¿Por qué es importante que la gente maya aprenda los glifos?"
    },
    {
      Prompt : "Is there a connection between language and identity?",
      SpanishPrompt: "¿Existe una conexión entre el lenguaje y la identidad?"
    },
    {
      Prompt : "How is the language written?",
      SpanishPrompt: "¿Cómo se escribe el lenguaje?"
    }
  ]
};

var day_keepers = {
  PageTitle : "Learn more about daykeepers",
  PageTitleSpanish : "Aprende más sobre los sacerdotes adivinos mayas",
  MediaFolder : "day_keepers",
  Videos : [
    {
      Prompt : "What is a daykeeper?",
      SpanishPrompt: "¿Quiénes son los sacerdotes adivinos mayas?"
    },
    {
      Prompt : "How important is your birthday?",
      SpanishPrompt: "¿Por qué es tan importante el día en que naces?"
    },
    {
      Prompt : "How is the calendar used for divination?",
      SpanishPrompt: "¿Por qué está el calendario vinculado con la adivinación?"
    },
    {
      Prompt : "What are the meanings of the days?",
      SpanishPrompt: "¿Cuál es el significado de los días?"
    }
  ]
};

var sites_today = {
  PageTitle : "Learn more about archaeological sites",
  PageTitleSpanish : "Aprende más sobre los sitios arqueológicos",
  MediaFolder : "sites_today",
  Videos : [
    {
      Prompt : "How do lasers help you find undiscovered sites?",
      SpanishPrompt: "¿Cómo ayudan los láseres a encontrar sitios que no han sido descubiertos?",
    },
    {
      Prompt : "What were Maya cities like when people lived in them?",
      SpanishPrompt: "¿Cómo eran las ciudades mayas cuando la gente vivía en ellas?"
    },
    {
      Prompt : "Why were some Maya cities abandoned?",
      SpanishPrompt: "¿Por qué fueron abandonadas algunas de las ciudades mayas?"
    },
    {
      Prompt : "Why do we preserve and visit Maya sites?",
      SpanishPrompt: "¿Por qué debemos preservar los sitios mayas?"
    }
  ]
};

var ballgame = {
  PageTitle : "Learn more about the ball game",
  PageTitleSpanish : "Aprende más sobre el juego de pelota",
  MediaFolder : "ballgame",
  Videos : [
    {
      Prompt : "How did the Maya play this game?",
      SpanishPrompt: "¿Cómo jugaron los mayas este juego?"
  },
    {
      Prompt : "Do people still play today?",
      SpanishPrompt: "¿Todavía la gente lo juega?"
    },
    {
      Prompt : "How were the balls made?",
      SpanishPrompt: "¿Cómo se hicieron las pelotas?"
    },
    {
      Prompt : "Who were the Hero Twins?",
      SpanishPrompt: "¿Quiénes son los Héroes Gemelos?"
    }
  ]
};

var weaving = {
  PageTitle : "Learn more about weaving",
  PageTitleSpanish : "Aprende más sobre cómo se tejía",
  MediaFolder : "weaving",
  Videos : [
    {
      Prompt : "How do people learn to weave?",
      SpanishPrompt: "¿Cómo aprende la gente a tejer?"
  },
    {
      Prompt : "How old are the patterns and techniques?",
      SpanishPrompt: "¿Qué tan antiguos son los patrones y las técnicas de tejido?"
    },
    {
      Prompt : "What do the patterns mean?",
      SpanishPrompt: "¿Qué significado tienen los patrones?"
    },
    {
      Prompt : "Why is weaving still important?",
      SpanishPrompt: "¿Por qué todavía el tejido es importante?"
    }
  ]
};

var agriculture = {
  PageTitle : "Learn more about agriculture",
  PageTitleSpanish : "Aprende más sobre agricultura",
  MediaFolder : "agriculture",
  Videos : [
    {
      Prompt : "What was life like outside of city centers?",
      SpanishPrompt: "¿Cómo era la vida por fuera de los centros de las ciudades?"
  },
    {
      Prompt : "What do we know about Maya markets?",
      SpanishPrompt: "¿Qué sabemos de los mercados mayas?"
    },
    {
      Prompt : "How did the ancient Maya farm?",
      SpanishPrompt: "¿Cómo cultivaban los antiguos mayas?"
    },
    {
      Prompt : "How did the Maya change their environment?",
      SpanishPrompt: "¿Cómo cambiaron los mayas su medioambiente?"
    }
  ]
};

var human_remains = {
  PageTitle : "Learn more about human remains",
  PageTitleSpanish : "Aprende más sobre los restos mortales",
  MediaFolder : "human_remains",
  Videos : [
    {
      Prompt : "What do bones reveal about a society?",
      SpanishPrompt: "¿Qué revelan los huesos sobre la sociedad?"
    },
    {
      Prompt : "How did the Maya bury their dead?",
      SpanishPrompt: "¿Cómo enterraban los mayas a sus muertos?"
    },
    {
      Prompt : "What’s it like to discover a tomb?",
      SpanishPrompt: "¿Qué se siente al descubrir una tumba?"
    },
    {
      Prompt : "What do bones reveal about diet?",
      SpanishPrompt: "¿Qué revelan los huesos acerca de la dieta?"
    }
  ]
};
