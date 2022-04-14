
function createElement(tag, props, ...children) {
  if (tag instanceof Function && tag !== Fragment)
    return tag({ ...props, children })

  const el = typeof tag === "string"
    ? document.createElement(tag)
    : document.createDocumentFragment()

  for (const key in props) {
    const value = props[key]
    if (key === "children") children = children.concat(value)
    else if (key === "style") Object.assign((el).style, value)
    else (el)[key] = value
  }

  function appendChild(child) {
    if (child === false || child === undefined || child === null) void 0 /** noop */
    else if (child instanceof Node) el.appendChild(child)
    else if (child instanceof Array) child.forEach(appendChild)
    else el.appendChild(document.createTextNode(String(child)))
  }

  appendChild(children)

  return el
}

function Fragment() { throw new Error("`Fragment` should not be called") }

export default { createElement, Fragment }
