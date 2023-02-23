
function calcular(){
    const  operador= txtoperador.value
    const op1 = parseFloat (txtop1.value)
    const op2 = parseFloat(txtop2.value)

    if ((operador == '+' || operador == '-'|| operador == '*' || operador == '/')&& !isNaN (op1) && !isNaN (op2)){
        switch (operador) {
            case '+':
                resultadofinal = op1 + op2;
                break;
            case '-':
                resultadofinal = op1 - op2;
                break;
            case '*':
                resultadofinal = op1 * op2;
                 break;
            case '/':
                resultadofinal = op1 / op2;
                break;

        }
        pResultado.style = 'color: green'
        pResultado.innerText = '=' + resultadofinal;
    }else {
        pResultado.style = 'color: pink'
        pResultado.innerText = 'calculo fallido'
    }
}