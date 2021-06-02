"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue // DONE
 * isFalse // DONE
 * not // DONE
 * addOne //DONE
 * isEven // DONE
 * isIdentical // DONE
 * isEqual // DONE
 * or // DONE
 * and // DONE
 * concat // DONE
 */

function isTrue(value)
{
    return value === true;

}

function isFalse(value)
{
    return value === false;
}

function not(value)
{
    return !value;
}

function addOne(value)
{
    return (Number(value) + 1);
}

function isEven(value)
{
    if (value === false)
    {
        return false;
    }
    return (value % 2 === 0)
}

function isIdentical(value_one, value_two)
{
    return (value_one === value_two);
}

function isEqual(value_one, value_two)
{
    return (value_one == value_two);
}

function or(value_one, value_two)
{
    return value_one || value_two;
}

function and(value_one, value_two)
{
    return value_one && value_two;
}

function concat(value_one, value_two)
{
    return value_one.toString() + value_two.toString();
}