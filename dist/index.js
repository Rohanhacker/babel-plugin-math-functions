module.exports = function({ types: t }) {
    return {
        visitor: {
            CallExpression(path) {
                if(t.isIdentifier(path.node.callee.object, {name: 'Math'})) {
                    if(t.isIdentifier(path.node.callee.property, {name: 'radian'})) {
                        var value = (path.node.arguments[0].value);
                        path.replaceWith(t.binaryExpression('/', t.binaryExpression('*', t.NumericLiteral(Number(value)), t.NumericLiteral(3.141592653589793)), t.NumericLiteral(180)));
                    } else if(t.isIdentifier(path.node.callee.property, {name: 'degree'})) {
                        var value = (path.node.arguments[0].value);
                        path.replaceWith(t.binaryExpression('/', t.binaryExpression('*', t.NumericLiteral(Number(value)), t.NumericLiteral(180)), t.NumericLiteral(3.141592653589793)));
                    }
                }
            }
        }
    }
}