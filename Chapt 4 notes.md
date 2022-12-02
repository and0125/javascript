# Logic Statements

## If Statements

The syntax for if statements is:

```JavaScript
if (boolean expression) {
    //some action
} else {
    // some other action
}
```

The expression can evaluate whether or not a variable exists, or any other boolean expression within the parentheses.

A variation is the if else statement with multiple else if blocks.

```JavaScript
if (boolean expression) {
    //some action
} else  if (other expression) {
    // some other action
}else if (3rd expression) {
    // some third expression
}
```

## Ternary Operators

unary operators have one operand (like the not symbol `!`), binary operators have two operands (liek the addition operator `+`). Ternary operators have three operands, and can be used as short hand for if else statements.

The template for these statements is: expression ? outcome if true : outcome if false.

this can be read as: if expression then do outcome if true, else do outcome if false.

These ternary operators only work for short actions, so it's best practice to use them when it makes the code easier to read. But if the logic contains multiple comparisons, if-else statements are better or switch statements.

## Switch Statements

These are great for evaluating conditions where there are 4 or more possible cases.

Syntax:

```javascript
switch (expression) {
  case value1:
    // code to be done
    break;
  case value2:
    // code to be done
    break;
  case value3:
    // code to be done
    break;
  case value4:
    // code to be done
    break;
  case value5:
    // code to be done
    break; // and so on
  default:
    // code to be done when no case is matched
    break;
}
```

The default case is usually written as the last case, but the switch statement will work fine if its in the middle or first. Other developers will expect it to be last though.

You can also do the exact same thing for multiple cases:

```javascript
switch (expression) {
  case value1:
  case value2:
    // code to be done for value 1 and value 2
    break;
  case value3:
    // code to be done
    break;
  case value4:
    // code to be done
    break;
  case value5:
    // code to be done
    break; // and so on
  default:
    // code to be done when no case is matched
    break;
}
```
