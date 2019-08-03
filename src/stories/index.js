import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from "../components/shared/Button";
import Editor from "../components/shared/Editor";
import TextBox from "../components/shared/TextBox";



storiesOf("Shared - Button", module)
  .add("Submit", () => (
    <Button
      text="Post"
      type="submit"
      onClick={action("triggered")} />
  ))

  .add("action-Button", () => (
    <Button text="delete" type="action" onClick={action("triggered")} />
  ));


// storiesOf('Shared - Button', module)
// .add("Submit", () =>(
//   <Button
//     text="Post"
//     type="submit"
//     onClick={action("triggered, Onclick()")}
//   />
//   ))
// .add("action-button", () =>(
//   <Button
//     text="delete"
//     type="action"
//     onClick={action("triggered, Onclick()")}
//   />
// ));


storiesOf('Shared - Editor', module)
  .add("mini", () =>
    <Editor
      text="mini"
      onChange={action("triggered, Onclick()")}
    />)
  .add("full", () =>
    <Editor
      text="full"
      onChange={action("triggered, Onclick()")}
    />
  );

storiesOf('Shared - TextBox', module)
  .add("mini", () =>
    <TextBox
     name=""
      type="TextLable"
      onChange={action("triggered, onChange()")}
    />
  );




// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
