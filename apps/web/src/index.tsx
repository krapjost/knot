import { TextButton, OutlinedButton } from 'ui';
import View from 'editor';
import { render } from 'solid-js/web';

const root = document.getElementById('root') as HTMLElement;

render(
  () => (
    <div>
      <h1>hello</h1>
      <TextButton name='hello' />
      <OutlinedButton color='secondary' />
      <View />
    </div>
  ),
  root,
);
