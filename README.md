# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot2.png)
![](./screenshot3.png)
![](./screenshot4.png)

### Links

- Live Site URL: [Interactive card details form](https://interactive-card-details-form-oluwadt.vercel.app)

## My process

### Built with

- HTML
- CSS
- Javascript
- Google Fonts

### What I learned

- Input field placeholder styling
- How to set maxlength for text fields
- How to add a space afeter every four characters inputted
- How to make a text field only accept numbers

```html
<input type="text" name="cvc" id="cvc" placeholder="e.g. 123" class="field" maxlength="3">
```
```css
.field::placeholder {
  color: hsl(279, 6%, 80%);
  font-weight: 500;
  font-size: 17px;
  font-family: 'Space Grotesk', sans-serif;
}
```
```js
const numberChange = (e) => {
    if (cardNumber.value.length > 0) {
        cardNumber.value = cardNumber.value.replace(/[^\dA-Z]/gi, "").replace(/(.{4})/g, "$1 ").trim();
    }
    const charCode = (e.which) ? e.which : e.keyCode
    if ((charCode < 48) || (charCode > 57)) {
        if (charCode != 8) {
            e.preventDefault();
        }
    }
    cardNumberCard.innerText = cardNumber.value
    cardNumber.style = ''
    cardNumber.nextElementSibling.remove()
}
```

### Continued development

- Placement of elements on a page in CSS
- DOM manipulation in Javascript

### Useful resources

- [Creating responsive text](https://www.w3schools.com/howto/howto_css_responsive_text.asp) - This is where I learned to make text that changes size with the screen size.

## Author

- Frontend Mentor - [@Oluwadt](https://www.frontendmentor.io/profile/Oluwadt)
- Twitter - [@oluwadt](https://www.twitter.com/oluwadt)

## Acknowledgments

- [Chat GPT](https://chat.openai.com/)
