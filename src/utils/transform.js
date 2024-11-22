/**
 * Uncomment this function if you want to use babel as it has been preconfigured for you.
 */
/**
import * as babel from "@babel/core";
import jsxPlugin from "@babel/plugin-transform-react-jsx";

export async function transform(input) {
  try {
    const res = babel.transform(input, {
      presets: [],
      plugins: [jsxPlugin, yourPlugin],
    });
    console.log(res);
    if (!res) {
      return {
        js: "",
        css: "",
      };
    }
    return {
      js: "// The transformed JS output",
      css: "The generated CSS output",
    };
  } catch (ex) {
    console.error(ex);
    return {
      js: "",
      css: "",
    };
  }
}
*/

/**
 * Implement this function that takes in the user code
 * (could be from input or by reading a file) and then
 * outputs the transformed JS and generated CSS.
 *
 * @param {string} input
 */
export async function transform(input) {
  return {
    js: "// The transformed JS output",
    css: "/* The generated CSS output */",
  };
}
