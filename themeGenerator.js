const fs = require("fs");

// Colors --------------------------------------------
const aqua = "#0ff";
const aquaTransparent500 = "#0ff7";

const purple = "#a852ff";
const purpleLight = "#ffa0ff";
const neonPink = "#ff1f96";

const redWarn = "#f44747";
const redError = "#ff7272";
const greenDark = "#085";
const green = "#0f5";
const greenLight = "#5fff7c";
const yellow = "#ffe65f";

const white = "#fff";

const gray100 = "#111";
const gray200 = "#222";
const gray300 = "#333";
const gray400 = "#555";
const gray500 = "#777";
const gray600 = "#999";
const gray700 = "#aaa";
const gray800 = "#ccc";
const gray900 = "#eee";

const transparent = "#0000";

const primary = aqua;
// Colors --------------------------------------------

const theme = {
  name: "Oled Aqua High Contrast",
  type: "dark",
  semanticHighlighting: true,
  semanticTokenColors: {
    enumMember: {
      foreground: "#00daf7",
    },
    "variable.constant": {
      foreground: white,
    },
    "variable.defaultLibrary": {
      foreground: purple,
    },
  },
  tokenColors: [
    {
      scope: "variable.other.property",
      settings: {
        foreground: purpleLight,
        fontStyle: "italic",
      },
    },
    {
      name: "unison punctuation",
      scope:
        "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      settings: {
        foreground: white,
      },
    },
    {
      name: "haskell variable generic-type",
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "haskell storage type",
      scope: "storage.type.haskell",
      settings: {
        foreground: white,
      },
    },
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: white,
      },
    },
    {
      name: "punctuation.separator.parameters.python",
      scope:
        "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      settings: {
        foreground: white,
      },
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "storage.modifier.lifetime.rust",
      scope: "storage.modifier.lifetime.rust",
      settings: {
        foreground: white,
      },
    },
    {
      name: "support.function.std.rust",
      scope: "support.function.std.rust",
      settings: {
        foreground: green,
      },
    },
    {
      name: "entity.name.lifetime.rust",
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "variable.language.rust",
      scope: "variable.language.rust",
      settings: {
        foreground: white,
      },
    },
    {
      name: "support.constant.edge",
      scope: "support.constant.edge",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "regexp constant character-class",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: white,
      },
    },
    {
      name: "regexp operator.quantifier",
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: white,
      },
    },
    {
      name: "punctuation.definition",
      scope:
        "punctuation.definition.string.begin,punctuation.definition.string.end",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Text",
      scope: "variable.parameter.function",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Comment Markup Link",
      scope: "comment markup.link",
      settings: {
        foreground: gray500,
      },
    },
    {
      name: "markup diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "diff",
      scope:
        "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      settings: {
        foreground: green,
      },
    },
    {
      name: "inserted.diff",
      scope: "markup.inserted.diff",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "deleted.diff",
      scope: "markup.deleted.diff",
      settings: {
        foreground: white,
      },
    },
    {
      name: "c++ function",
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: white,
      },
    },
    {
      name: "c++ block",
      scope:
        "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      settings: {
        foreground: white,
      },
    },
    {
      name: "js/ts punctuation separator key-value",
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: white,
      },
    },
    {
      name: "js/ts import keyword",
      scope: "keyword.operator.expression.import",
      settings: {
        foreground: green,
      },
    },
    {
      name: "math js/ts",
      scope: "support.constant.math",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "math property js/ts",
      scope: "support.constant.property.math",
      settings: {
        foreground: white,
      },
    },
    {
      name: "js/ts variable.other.constant",
      scope: "variable.other.constant",
      settings: {
        foreground: purple,
        fontStyle: "",
      },
    },
    {
      name: "java type",
      scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "java source",
      scope: "source.java",
      settings: {
        foreground: white,
      },
    },
    {
      name: "java modifier.import",
      scope:
        "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      settings: {
        foreground: white,
      },
    },
    {
      name: "java modifier.import",
      scope: "meta.method.java",
      settings: {
        foreground: green,
      },
    },
    {
      name: "java modifier.import",
      scope:
        "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "java instanceof",
      scope: "keyword.operator.instanceof.java",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "java variable.name",
      scope: "meta.definition.variable.name.java",
      settings: {
        foreground: white,
      },
    },
    {
      name: "operator logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "operator bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "operator channel",
      scope: "keyword.operator.channel",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "support.constant.property-value.scss",
      scope:
        "support.constant.property-value.scss,support.constant.property-value.css",
      settings: {
        foreground: white,
      },
    },
    {
      name: "CSS/SCSS/LESS Operators",
      scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "css color standard name",
      scope:
        "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      settings: {
        foreground: white,
      },
    },
    {
      name: "css comma",
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: white,
      },
    },
    {
      name: "css attribute-name.id",
      scope: "support.constant.color.w3c-standard-color-name.css",
      settings: {
        foreground: white,
      },
    },
    {
      name: "css property-name",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "js/ts module",
      scope:
        "support.module.node,support.type.object.module,support.module.node",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "entity.name.type.module",
      scope: "entity.name.type.module",
      settings: {
        foreground: green,
      },
    },
    {
      name: "js variable readwrite",
      scope:
        "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      settings: {
        foreground: white,
      },
    },
    {
      name: "js/ts json",
      scope: "support.constant.json",
      settings: {
        foreground: white,
      },
    },
    {
      name: "js/ts Keyword",
      scope: [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof",
      ],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "js/ts console",
      scope: "support.type.object.console",
      settings: {
        foreground: white,
      },
    },
    {
      name: "js/ts support.variable.property.process",
      scope: "support.variable.property.process",
      settings: {
        foreground: white,
      },
    },
    {
      name: "js console function",
      scope: "entity.name.function, support.function.console",
      settings: {
        foreground: greenLight,
      },
    },
    {
      name: "keyword.operator.misc.rust",
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: white,
      },
    },
    {
      name: "keyword.operator.sigil.rust",
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "operator",
      scope: "keyword.operator.delete",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "js dom",
      scope: "support.type.object.dom",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "js dom variable",
      scope: "support.variable.dom,support.variable.property.dom",
      settings: {
        foreground: white,
      },
    },
    {
      name: "keyword.operator",
      scope:
        "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "C operator assignment",
      scope:
        "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation.separator.delimiter",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Other punctuation .c",
      scope: "punctuation.separator.c,punctuation.separator.cpp",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "C type posix-reserved",
      scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "keyword.operator.sizeof.c",
      scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "python parameter",
      scope: "variable.parameter.function.language.python",
      settings: {
        foreground: white,
      },
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "python logical",
      scope: "keyword.operator.logical.python",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "pyCs",
      scope: "variable.parameter.function.python",
      settings: {
        foreground: white,
      },
    },
    {
      name: "python block",
      scope:
        "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      settings: {
        foreground: white,
      },
    },
    {
      name: "python function-call.generic",
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: green,
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Compound Assignment Operators",
      scope: "keyword.operator.assignment.compound",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Compound Assignment Operators js/ts",
      scope:
        "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Variables",
      scope: "variable",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Variables",
      scope: "variable.c",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Language variables",
      scope: "variable.language",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Java Variables",
      scope: "token.variable.parameter.java",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Java Imports",
      scope: "import.storage.java",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Packages",
      scope: "token.package.keyword",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Packages",
      scope: "token.package",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Functions",
      scope: [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function",
      ],
      settings: {
        foreground: greenLight,
      },
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Classes",
      scope: "support.class, entity.name.type.class",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts",
      ],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Class name php",
      scope: "variable.other.class.php",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Type Name",
      scope: "entity.name.type",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Keyword Control",
      scope: "keyword.control",
      settings: {
        foreground: neonPink,
        fontStyle: "",
      },
    },
    {
      name: "Control Elements",
      scope: "control.elements, keyword.operator.less",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Storage JS TS",
      scope: "token.storage",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      scope:
        "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Java Storage",
      scope: "token.storage.type.java",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Support",
      scope: "support.function",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "Support type",
      scope: "support.type.property-name",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Support type",
      scope: "support.constant.property-value",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Support type",
      scope: "support.constant.font-name",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Meta tag",
      scope: "meta.tag",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: purpleLight,
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Constant other symbol",
      scope: "constant.other.symbol",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Constants",
      scope: "punctuation.definition.constant",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Tags",
      scope: "entity.name.tag",
      settings: {
        foreground: neonPink,
      },
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Attribute IDs",
      scope: "entity.other.attribute-name.id",
      settings: {
        fontStyle: "normal",
        foreground: green,
      },
    },
    {
      name: "Attribute class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        fontStyle: "normal",
        foreground: white,
      },
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Headings",
      scope: "markup.heading",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Headings",
      scope:
        "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Bold",
      scope: "markup.bold,todo.bold",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Bold",
      scope: "punctuation.definition.bold",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "markup Italic",
      scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "emphasis md",
      scope: "emphasis md",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown headings",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: white,
      },
    },
    {
      name: "punctuation.definition.list.begin.markdown",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading setext",
      scope: "markup.heading.setext",
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown",
      ],
      settings: {
        foreground: white,
      },
    },
    {
      name: "beginning.punctuation.definition.list.markdown",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      scope:
        "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
      scope:
        "string.other.link.title.markdown,string.other.link.description.markdown",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Embedded",
      scope:
        "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal",
      settings: {
        foreground: white,
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Broken",
      scope: "invalid.broken",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Unimplemented",
      scope: "invalid.unimplemented",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
      scope: "source.json meta.structure.dictionary.json > string.quoted.json",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      scope:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      settings: {
        foreground: white,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      scope:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      scope:
        "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "[VSCODE-CUSTOM] JSON Property Name",
      scope: "support.type.property-name.json",
      settings: {
        foreground: white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      scope: "support.type.property-name.json punctuation",
      settings: {
        foreground: white,
      },
    },
    {
      name: "laravel blade tag",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "laravel blade @",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "use statement for other classes",
      scope:
        "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "error suppression",
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "php instanceof",
      scope: "keyword.operator.type.php",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "style double quoted array index normal begin",
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: white,
      },
    },
    {
      name: "style double quoted array index normal end",
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: white,
      },
    },
    {
      name: "php illegal.non-null-typehinted",
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: redWarn,
      },
    },
    {
      name: "php types",
      scope:
        "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "php call-function",
      scope:
        "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      settings: {
        foreground: green,
      },
    },
    {
      name: "php function-resets",
      scope:
        "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      settings: {
        foreground: white,
      },
    },
    {
      name: "support php constants",
      scope: "support.constant.core.rust",
      settings: {
        foreground: white,
      },
    },
    {
      name: "support php constants",
      scope:
        "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      settings: {
        foreground: white,
      },
    },
    {
      name: "php goto",
      scope: "entity.name.goto-label.php,support.other.php",
      settings: {
        foreground: green,
      },
    },
    {
      name: "php logical/bitwise operator",
      scope:
        "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "php regexp operator",
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "php comparison",
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "php heredoc/nowdoc",
      scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: green,
      },
    },
    {
      name: "python function support",
      scope:
        "support.token.decorator.python,meta.function.decorator.identifier.python",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "parameter function js/ts",
      scope: "function.parameter",
      settings: {
        foreground: white,
      },
    },
    {
      name: "brace function",
      scope: "function.brace",
      settings: {
        foreground: white,
      },
    },
    {
      name: "parameter function ruby cs",
      scope: "function.parameter.ruby, function.parameter.cs",
      settings: {
        foreground: white,
      },
    },
    {
      name: "constant.language.symbol.ruby",
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "rgb-value",
      scope: "rgb-value",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "rgb value",
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: white,
      },
    },
    {
      name: "rgb value less",
      scope: "less rgb-value",
      settings: {
        foreground: white,
      },
    },
    {
      name: "sass selector",
      scope: "selector.sass",
      settings: {
        foreground: white,
      },
    },
    {
      name: "ts primitive/builtin types",
      scope:
        "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "block scope",
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: white,
      },
    },
    {
      name: "cs storage type",
      scope: "storage.type.cs",
      settings: {
        foreground: purple,
      },
    },
    {
      name: "cs local variable",
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: white,
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: green,
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: white,
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: redWarn,
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "Import module JS",
      scope: ["keyword.operator.module"],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "js Flowtype",
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: green,
      },
    },
    {
      name: "js Flow",
      scope: ["support.type.primitive"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "js class prop",
      scope: ["meta.property.object"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "js func parameter",
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "js template literals begin",
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "js template literals end",
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "js template literals variable braces begin",
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "js template literals variable braces end",
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "js operator.assignment",
      scope: ["keyword.operator.assignment"],
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.assignment.go"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Go package name",
      scope: ["entity.name.package.go"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "elm prelude",
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "elm constant",
      scope: ["support.constant.elm"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "template literal",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "html/pug (jade) escaped characters and entities",
      scope: ["constant.character.entity"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "Clojure globals",
      scope: ["entity.global.clojure"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Clojure symbols",
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "Clojure constants",
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "CoffeeScript Function Argument",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "Ini Default Text",
      scope: ["source.ini"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Makefile prerequisities",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "Makefile text colour",
      scope: ["source.makefile"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Groovy import names",
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Groovy Methods",
      scope: ["meta.method.groovy"],
      settings: {
        foreground: green,
      },
    },
    {
      name: "Groovy Variables",
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "Groovy Inheritance",
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "HLSL Semantic",
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "HLSL Types",
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
      ],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "SQL Variables",
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "types",
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "heading 1, keyword",
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "heading 2, callable",
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "heading 3, property",
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "heading 4, type, class, interface",
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "heading 5, enums, preprocessor, constant, decorator",
      scope: ["keyword.control.xi"],
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "heading 6, number",
      scope: ["invalid.xi"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "string",
      scope: ["beginning.punctuation.definition.quote.markdown.xi"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "comments",
      scope: ["beginning.punctuation.definition.list.markdown.xi"],
      settings: {
        foreground: gray500,
      },
    },
    {
      name: "link",
      scope: ["constant.character.xi"],
      settings: {
        foreground: green,
      },
    },
    {
      name: "accent",
      scope: ["accent.xi"],
      settings: {
        foreground: green,
      },
    },
    {
      name: "wikiword",
      scope: ["wikiword.xi"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "language operators like '+', '-' etc",
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: white,
      },
    },
    {
      scope: ["keyword.operator.ternary"],
      settings: {
        foreground: white,
      },
    },
    {
      scope: ["meta.embedded.expression"],
      settings: {
        foreground: primary,
      },
    },
    {
      scope: ["punctuation.definition.tag"],
      settings: {
        foreground: "#ccc",
      },
    },
    {
      name: "elements to dim",
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: gray500,
      },
    },
    {
      name: "C++/C#",
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition",
      ],
      settings: {
        foreground: purple,
      },
    },
    {
      name: "Markdown underscore-style headers",
      scope: [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown",
      ],
      settings: {
        foreground: white,
      },
    },
    {
      name: "meta.brace.square",
      scope: [" meta.brace.square"],
      settings: {
        foreground: white,
      },
    },
    {
      name: "Comments",
      scope: "comment, punctuation.definition.comment",
      settings: {
        fontStyle: "italic",
        foreground: gray500,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: gray500,
      },
    },
    {
      name: "punctuation.definition.block.sequence.item.yaml",
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: white,
      },
    },
    {
      scope: ["constant.language.symbol.elixir"],
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "js/ts italic",
      scope:
        "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "comment",
      scope: "comment.line.double-slash,comment.block.documentation",
      settings: {
        foreground: gray500,
        fontStyle: "italic",
      },
    },
    {
      name: "Inside documentation block comment",
      scope: "comment.block.documentation",
      settings: {
        foreground: greenDark,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Keyword Control",
      scope: "keyword.control.import.python,keyword.control.flow.python",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "markup.italic.markdown",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic",
      },
    },
  ],
  colors: {
    foreground: primary,
    focusBorder: primary,
    "selection.background": aquaTransparent500,
    "scrollbar.shadow": primary,
    "activityBar.foreground": primary,
    "activityBar.background": "#000",
    "activityBar.inactiveForeground": "#888",
    "activityBarBadge.foreground": white,
    "activityBarBadge.background": aquaTransparent500,
    "activityBar.border": "#222",
    "sideBar.background": "#000",
    "sideBar.foreground": white,
    "sideBarSectionHeader.background": "#011",
    "sideBarSectionHeader.foreground": white,
    "sideBarSectionHeader.border": "#000",
    "sideBarTitle.foreground": white,
    "sideBar.border": "#222",
    "sideBar.dropBackground": "#0ff1",
    "list.inactiveSelectionBackground": "#0ff2",
    "list.inactiveSelectionForeground": white,
    "list.hoverBackground": "#0ff2",
    "list.hoverForeground": "#fff",
    "list.activeSelectionBackground": "#0ff3",
    "list.activeSelectionForeground": white,
    "list.dropBackground": "#0ff1",
    "list.highlightForeground": primary,
    "list.focusBackground": "#0ff3",
    "list.focusForeground": white,
    "listFilterWidget.background": "#055",
    "listFilterWidget.outline": "#de000000",
    "listFilterWidget.noMatchesOutline": redError,
    "tree.indentGuidesStroke": "#555",
    "statusBar.foreground": white,
    "statusBar.background": "#000",
    "statusBarItem.hoverBackground": "#075",
    "statusBar.border": "#000",
    "statusBar.debuggingBackground": "#c44100",
    "statusBar.debuggingForeground": white,
    "statusBar.noFolderBackground": "#2a0066",
    "statusBar.noFolderForeground": white,
    "statusBarItem.remoteBackground": "#075",
    "statusBarItem.remoteForeground": white,
    "statusBarItem.activeBackground": "#FFFFFF25",
    "titleBar.activeBackground": "#000",
    "titleBar.activeForeground": white,
    "titleBar.inactiveBackground": "#000",
    "titleBar.inactiveForeground": "#888888",
    "titleBar.border": transparent,
    "menubar.selectionForeground": white,
    "menubar.selectionBackground": "#075",
    "menubar.selectionBorder": "#075",
    "menu.foreground": white,
    "menu.background": "#222",
    "menu.selectionForeground": white,
    "menu.selectionBackground": "#222",
    "menu.selectionBorder": primary,
    "menu.separatorBackground": primary,
    "menu.border": "#222",
    "button.background": "#055",
    "button.foreground": white,
    "button.hoverBackground": "#075",
    "button.secondaryForeground": white,
    "button.secondaryBackground": "#444",
    "button.secondaryHoverBackground": "#075",
    "input.background": "#000",
    "input.border": transparent,
    "input.foreground": white,
    "inputOption.activeBackground": "#055",
    "inputOption.activeBorder": "#ffffff00",
    "inputOption.activeForeground": white,
    "input.placeholderForeground": "#777",
    "textLink.foreground": primary,

    "editor.background": "#000",
    "editor.foreground": white,
    "editorLineNumber.foreground": "#777",
    "editorCursor.foreground": primary,
    "editorCursor.background": white,
    "editor.selectionBackground": "#588",
    "editor.selectionHighlightBackground": "#055",
    "editor.selectionHighlightBorder": "#4f6e71",
    "editor.inactiveSelectionBackground": "#3a4041",
    "editorWhitespace.foreground": "#00d2a830",
    "editor.findMatchBackground": "#055",
    "editor.findMatchBorder": "#333",
    "editor.findMatchHighlightBackground": "#344",
    "editor.findMatchHighlightBorder": "#333",
    "editor.findRangeHighlightBackground": "#111",
    "editor.findRangeHighlightBorder": "#131313",
    "editor.rangeHighlightBackground": "#333",
    "editor.rangeHighlightBorder": "#555",
    "editor.hoverHighlightBackground": "#2b5151",
    "editor.wordHighlightStrongBackground": "#0570ab8b",
    "editor.wordHighlightStrongBorder": transparent,
    "editor.wordHighlightBackground": "#555",
    "editor.lineHighlightBackground": "#ffffff0A",
    "editor.lineHighlightBorder": "#222",
    "editorLineNumber.activeForeground": white,
    "editorLink.activeForeground": "#49b2ff",
    "editorIndentGuide.background": "#444",
    "editorIndentGuide.activeBackground": "#006570",
    "editorRuler.foreground": "#555",
    "editorBracketMatch.background": "#003030",
    "editorBracketMatch.border": transparent,
    "editor.foldBackground": "#003030",
    "editorOverviewRuler.background": "#111",
    "editorOverviewRuler.border": "#055",
    "editorError.foreground": redError,
    "editorError.background": "#000",
    "editorError.border": transparent,
    "editorWarning.foreground": "#cca700",
    "editorWarning.background": "#A9904000",
    "editorWarning.border": "#ffffff00",
    "editorInfo.foreground": "#75beff",
    "editorInfo.background": "#4490BF00",
    "editorInfo.border": "#4490BF00",
    "editorGutter.background": "#000",
    "editorGutter.modifiedBackground": "#075",
    "editorGutter.addedBackground": "#247c0c",
    "editorGutter.deletedBackground": "#db1c25",
    "editorGutter.foldingControlForeground": "#0aa",
    "editorCodeLens.foreground": primary,
    "editorGroup.border": "#222",
    "diffEditor.insertedTextBackground": "#6bb9554e",
    "diffEditor.insertedTextBorder": "#6bb95500",
    "diffEditor.removedTextBackground": "#ff000048",
    "diffEditor.removedTextBorder": "#38121200",
    "diffEditor.border": "#222",
    "panel.background": "#000",
    "panel.border": "#555",
    "panelTitle.activeBorder": "#000",
    "panelTitle.activeForeground": white,
    "panelTitle.inactiveForeground": "#aaa",
    "badge.background": "#075",
    "badge.foreground": white,

    "terminal.foreground": white,
    "terminal.selectionBackground": "#ffffff40",
    "terminalCursor.background": "#075",
    "terminalCursor.foreground": white,
    "terminal.border": "#555",

    "terminal.ansiBlack": "#000",
    "terminal.ansiBlue": "#2472c8",
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBrightBlue": "#3b8eea",
    "terminal.ansiBrightCyan": "#29b8db",
    "terminal.ansiBrightGreen": "#23d18b",
    "terminal.ansiBrightMagenta": "#d670d6",
    "terminal.ansiBrightRed": "#f14c4c",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#f5f543",
    "terminal.ansiCyan": "#11a8cd",
    "terminal.ansiGreen": "#0dbc79",
    "terminal.ansiMagenta": "#bc3fbc",
    "terminal.ansiRed": "#cd3131",
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiYellow": "#e5e510",

    "breadcrumb.background": "#000",
    "breadcrumb.foreground": white,
    "breadcrumb.focusForeground": primary,
    "breadcrumb.activeSelectionForeground": primary,

    "editorGroupHeader.border": "#222",
    "editorGroupHeader.tabsBackground": "#000",
    "editorGroupHeader.tabsBorder": "#000",

    "tab.activeForeground": white,
    "tab.border": "#000",
    "tab.activeBackground": "#000",
    "tab.activeBorder": "#000",
    "tab.activeBorderTop": "#000",
    "tab.inactiveBackground": "#000",
    "tab.inactiveForeground": "#ccc",
    "tab.hoverBackground": "#000",

    "scrollbarSlider.background": "#79797966",
    "scrollbarSlider.hoverBackground": "#646464b3",
    "scrollbarSlider.activeBackground": "#bfbfbf66",
    "progressBar.background": primary,
    "widget.shadow": "#00606030",
    "editorWidget.foreground": "#aaa",
    "editorWidget.background": "#000",
    "editorWidget.resizeBorder": primary,
    "pickerGroup.border": "#555",
    "pickerGroup.foreground": white,
    "debugToolBar.background": "#000",
    "debugToolBar.border": "#333",
    "notifications.foreground": white,
    "notifications.background": "#000",
    "notificationToast.border": "#333",
    "notificationsErrorIcon.foreground": "#e65032",
    "notificationsWarningIcon.foreground": "#f0c70b",
    "notificationsInfoIcon.foreground": "#089292",
    "notificationCenter.border": "#333",
    "notificationCenterHeader.foreground": primary,
    "notificationCenterHeader.background": "#000",
    "notifications.border": "#333",
    "gitDecoration.addedResourceForeground": "#00ff2e",
    "gitDecoration.conflictingResourceForeground": "#cb59ff",
    "gitDecoration.deletedResourceForeground": "#ea4022",
    "gitDecoration.ignoredResourceForeground": "#555",
    "gitDecoration.modifiedResourceForeground": primary,
    "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": greenLight,
    "editorMarkerNavigation.background": "#111",
    "editorMarkerNavigationError.background": redError,
    "editorMarkerNavigationWarning.background": "#cca700",
    "editorMarkerNavigationInfo.background": "#055",
    "merge.currentHeaderBackground": "#217171",
    "merge.currentContentBackground": "#224444",
    "merge.incomingHeaderBackground": "#4c398f",
    "merge.incomingContentBackground": "#281f49",
    "merge.commonHeaderBackground": "#444",
    "merge.commonContentBackground": "#333",
    "editorSuggestWidget.background": "#111",
    "editorSuggestWidget.border": "#454545",
    "editorSuggestWidget.foreground": white,
    "editorSuggestWidget.highlightForeground": "#0ff8",
    "editorSuggestWidget.selectedBackground": "#224444",
    "editorHoverWidget.foreground": "#cccccc",
    "editorHoverWidget.background": "#222",
    "editorHoverWidget.border": "#555",
    "peekView.border": "#075",
    "peekViewEditor.background": "#002222",
    "peekViewEditorGutter.background": "#002222",
    "peekViewEditor.matchHighlightBackground": "#77562b99",
    "peekViewEditor.matchHighlightBorder": "#77562b",
    "peekViewResult.background": "#002222",
    "peekViewResult.fileForeground": white,
    "peekViewResult.lineForeground": "#aaaaaa",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#055",
    "peekViewResult.selectionForeground": "#aaaaaa",
    "peekViewTitle.background": "#222",
    "peekViewTitleDescription.foreground": "#aaaaaa",
    "peekViewTitleLabel.foreground": white,
    "icon.foreground": primary,
    "checkbox.background": "#000",
    "checkbox.foreground": white,
    "checkbox.border": transparent,
    "dropdown.background": "#000",
    "dropdown.foreground": white,
    "dropdown.border": transparent,
    "minimapGutter.addedBackground": "#247c0c",
    "minimapGutter.modifiedBackground": "#075",
    "minimapGutter.deletedBackground": "#db1c25",
    "minimap.findMatchHighlight": "#055",
    "minimap.selectionHighlight": "#0ff3",
    "minimap.errorHighlight": redError,
    "minimap.warningHighlight": "#cca700",
    "minimap.background": "#000",
    "editorGroup.emptyBackground": "#000",
    "panelSection.border": "#777",
    "settings.headerForeground": primary,
    "settings.focusedRowBackground": "#ffffff07",
    "walkThrough.embeddedEditorBackground": "#00000050",
    "editorGutter.commentRangeForeground": "#00aaaa",
    "debugExceptionWidget.background": "#000",
    "debugExceptionWidget.border": "#333",
  },
};

const stringfiedTheme = JSON.stringify(theme);

function writeThemeFile(path, stringfiedThemeJSON) {
  fs.writeFile(path, stringfiedThemeJSON, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
    }
  });
}

writeThemeFile("./themes/oled-aqua-high-contrast.json", stringfiedTheme);
writeThemeFile("./themes/oled-aqua-dark.json", stringfiedTheme);

console.log(9821, "themes saved");
