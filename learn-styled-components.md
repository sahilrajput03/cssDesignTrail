# Styled components

**Continue reding [docs from here](https://styled-components.com/docs/basics#getting-started).**

```bash
# install
npm i styled-components @types/styled-components
```

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
  height: ${(props) => (props.height ? props.height : 'auto')};
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
