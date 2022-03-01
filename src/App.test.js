import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Task1 from './task1/Task1';

test('renders test title', () => {
  render(<App />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/web engineer test/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not output for invalid 1-line inputs', () => {
  const rendered = render(<Task1 />);
  
  const input =  rendered.container.querySelector('#value');
  const output =  rendered.container.querySelector('#output');
  const button = rendered.container.querySelector('#button');

  fireEvent.change(input, {target: { value: 'adhda>'}});
  fireEvent.click(button);

  expect(output.value).toBe('');
});

test('does not output for invalid multiline inputs', () => {
  const rendered = render(<Task1 />);
  
  const input =  rendered.container.querySelector('#value');
  const output =  rendered.container.querySelector('#output');
  const button = rendered.container.querySelector('#button');

  fireEvent.change(input, {target: { value: 'adhda>\n>dajdjlajd'}});
  fireEvent.click(button);

  expect(output.value).toBe('');
});

test('produces the correct output for a 4x3 matrix', () => {
  const rendered = render(<Task1 />);
  
  const input =  rendered.container.querySelector('#value');
  const output =  rendered.container.querySelector('#output');
  const button = rendered.container.querySelector('#button');

  fireEvent.change(input, {target: { value: '[2, 3, 4, 8]\n[5, 7, 9, 12]\n[1, 0, 6, 10]'}});
  fireEvent.click(button);

  expect(output.value).toBe('2,3,4,8,12,10,6,0,1,5,7,9');
});

test('produces the correct output for a 3x4 matrix', () => {
  const rendered = render(<Task1 />);
  
  const input =  rendered.container.querySelector('#value');
  const output =  rendered.container.querySelector('#output');
  const button = rendered.container.querySelector('#button');

  fireEvent.change(input, {target: { value: '[1, 2, 3]\n[4, 5, 6]\n[7, 8 , 9]\n[10, 11 , 12]'}});
  fireEvent.click(button);

  expect(output.value).toBe('1,2,3,6,9,12,11,10,7,4,5,8');
});

test('produces the correct output for a 2x2 matrix', () => {
  const rendered = render(<Task1 />);
  
  const input =  rendered.container.querySelector('#value');
  const output =  rendered.container.querySelector('#output');
  const button = rendered.container.querySelector('#button');

  fireEvent.change(input, {target: { value: '[1, 2]\n[3, 4]'}});
  fireEvent.click(button);

  expect(output.value).toBe('1,2,4,3');
});

test('produces the correct output for a 3x3 matrix', () => {
  const rendered = render(<Task1 />);
  
  const input =  rendered.container.querySelector('#value');
  const output =  rendered.container.querySelector('#output');
  const button = rendered.container.querySelector('#button');

  fireEvent.change(input, {target: { value: '[1, 2, 3]\n[4, 5, 6]\n[7, 8 , 9]'}});
  fireEvent.click(button);

  expect(output.value).toBe('1,2,3,6,9,8,7,4,5');
});

test('produces the correct output for a 4x5 matrix', () => {
  const rendered = render(<Task1 />);
  
  const input =  rendered.container.querySelector('#value');
  const output =  rendered.container.querySelector('#output');
  const button = rendered.container.querySelector('#button');

  fireEvent.change(input, {target: { value: '[1, 2, 3, 4, 5]\n[6, 7, 8, 9, 10]\n[11, 12, 13, 14, 15]\n[16, 17, 18, 19, 20]'}});
  fireEvent.click(button);

  expect(output.value).toBe('1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12');
});