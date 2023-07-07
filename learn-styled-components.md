# Styled components

**Continue reding [docs from here](https://styled-components.com/docs/basics#getting-started).**

```bash
# install
npm i styled-components @types/styled-components
```

## Using uss at two places

```ts
const CssForColumnView = css`
  & {
    flex-direction: column-reverse;
  }
  .text__details {
    padding-inline-start: 0px;
  }
`;

const MoviePosterWithAdditionDetails = styled.div`
  display: flex;
  .text__details {
    margin: auto;
    padding-inline-start: 24px;
    text-align: left;
  }
  // PLEASE DON"T USE THIS WAY, this is a contrived example to show usage of css in multiple places only.
  // IDEAL WAY for below is to instead use like #MASTER_PLAN# section code block.
  @media (max-width: ${XL_MEDIA_BREAKPOINT}) and (min-width: ${LG_MEDIA_BREAKPOINT}) {
    ${CssForColumnView}
  }
  @media (max-width: ${MD_MEDIA_BREAKPOINT}) {
    ${CssForColumnView}
  }
`;
```

```ts
// #MASTER_PLAN#
const MoviePosterWithAdditionDetails = styled.div`
  display: flex;
  .text__details {
    margin: auto;
    padding-inline-start: 24px;
    text-align: left;
  }
  @media (max-width: ${XL_MEDIA_BREAKPOINT}) and (min-width: ${LG_MEDIA_BREAKPOINT}), (max-width: ${MD_MEDIA_BREAKPOINT}) {
    & {
      flex-direction: column-reverse;
    }
    .text__details {
      padding-inline-start: 0px;
    }
  }
`;
```

## Add `props` type and `defaultProps` to styled component

![image](https://user-images.githubusercontent.com/31458531/235714441-12bd188b-06e0-49c9-892e-6a5353794987.png)


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

Stackoverflow Answer: [Click here](https://stackoverflow.com/a/52542937/10012446)

**Below Codesandbox Link: [Click here](https://codesandbox.io/s/objective-wave-bwzfpl?file=/src/App.tsx)**

```ts
// DatingMatch.tsx
type RoundBtnPropsType = {
  className?: string;
  onClick: () => void;
  src: string;
  alt: string
};

function RoundBtnWithImage({
  onClick,
  src,
  alt,
  className,
}: RoundBtnPropsType) {
  return (
    <button className={className ?? ''} onClick={onClick} type="submit">
      <img src={src} alt={alt} />
    </button>
  );
}
RoundBtnWithImage.defaultProps = {
  className: '', // This facilitates us to skip passing className prop to the `RoundButtonWithImageStyled` when we actually use it in JSX. FYI: If you add a className prop to `RoundButtonWithImageStyled` then that class will also be assigned to `button` tag as well. AWESOME, isn't IT!
};

const RoundButtonWithImageStyled = styled(RoundBtnWithImage)`
  height: 60px !important;
  aspect-ratio: 1 !important;
  background: red !important;
  border-radius: 100% !important;
`;

// in JSX
const MyComp = () => <div><RoundButtonWithImageStyled onClick={() => {}} src="" alt="Pass Button Here" /></div>
```

![image](https://user-images.githubusercontent.com/31458531/205321080-838ccb5c-da57-4ebc-8593-c3634d9ae90e.png)

**Another Example(older example):**

Source: [Click here](https://stackoverflow.com/a/66170576/10012446)

In docs: [Click here](https://styled-components.com/docs/api#transient-props)

![image](https://user-images.githubusercontent.com/31458531/202514876-65e03d7f-aac7-4f05-aa6a-5e49dafc1182.png)


**Well not the last example:**

Conditionally effective css, i.e., only effective if the prop passed has those values: `$invertColorOnHover` and `$lightBorder`.

![image](https://user-images.githubusercontent.com/31458531/205344157-9c6c885d-d64e-4dbf-aa87-8f15b5b0fee7.png)


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
