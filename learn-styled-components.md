# Styled components

**Continue reding [docs from here](https://styled-components.com/docs/basics#getting-started).**

```bash
# install
npm i styled-components @types/styled-components
```

## Add class to styled component - 💕❤😘

Source: [Click here](https://stackoverflow.com/questions/59756648/add-classes-to-styled-component)

```js
const FormWrapper = styled.div.attrs({
  className: 'myDesiredClassHere',
  })`
    .input {
    /* Custom Styles */
    }
```


## Simple usage

```js
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;


 <Button>Normal Button</Button>
```

## Thats how you wrap an existing component with `styled

Source: [Click here](https://stackoverflow.com/a/66170576/10012446)

In docs: [Click here](https://styled-components.com/docs/api#transient-props)

![image](https://user-images.githubusercontent.com/31458531/202514876-65e03d7f-aac7-4f05-aa6a-5e49dafc1182.png)

## Passing value from prop to css

Docs: [Adapting based on props](https://styled-components.com/docs/basics#adapting-based-on-props)

```js
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const RoundButton = styled(Button)`
  height: ${(props) => (props.height ?? 'auto')};
  border-radius: 50rem;
`;

export default RoundButton;


// USAGE:
<RoundButton
  variant="primary"
  type="submit"
  className="w-100 px-5"
  size="sm"
  height="40px" // <<<<<<<<<< if not provided it would be considered 'auto'
>
  Next Step
</RoundButton>

```

Also, for above you might get error like that (considering that prop name is `lightBorder` instead of `height`)!

![image](https://user-images.githubusercontent.com/31458531/205305518-fbdbc26b-32d1-42ea-be3b-7910b07dc08a.png)


**So to fix that you just need to append $ to your prop name(this is new from styled version 5.0 above)**

*Source: [Click here](https://gist.github.com/meddokss/009cdb5192e487654c0d90cd8f692214)*

![image](https://user-images.githubusercontent.com/31458531/205305372-c19e5bd0-cb96-45c7-bea8-43cf5205e3a5.png)

## Why styled uses tagged literals and how does it even work?

Source: [Click here](https://styled-components.com/docs/advanced#tagged-template-literals)
