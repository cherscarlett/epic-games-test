import React from 'react';

/**
 * Implement the unwind logic here.  This method is attached to the window because it is used by the
 * test harness to verify the results
 * @param value
 */

// I did this brute force because the instruction document I got doesn't match the zip file 
// To do the second task without instructions, I decided to dedicate more time to it
// I'll discuss how to make this not look like I wrote it at 1am before the embargo was lifting the same day :)

window.clockwiseMatrix = function clockwiseMatrix(value) {
  if (!value) {
    console.log('User provided an empty text area');
    return '';
  }
  const rowsArray = value.split('\n');
  
  if (!rowsArray || rowsArray.length < 2) {
    console.log('User did not provide a matrix');
    return '';
  }

  const rows = rowsArray.map((row) => {
      try {
        return JSON.parse(row);
      } catch (e) {
        return '';
      }
    }
  );

  if (rows.includes('')) {
    console.log('User did not provide a valid matrix');
    return '';
  };

  // We probably need to check that the input is a matrix, but this code will still work so I'm just gonna mention it here

  let output = [];
  let reversed = false;
  let counter = 0;
  
  while (rows.length) {
    if (rows[counter]) {
      let row = rows[counter];

      if (counter === 0) {
        // if first row, all numbers, left to right
        output = [...output, ...row];
      } 

      if (counter === rows.length - 1) {
        // if last row, remove first and last rows
        if (counter !== 0 && !reversed) {
          // if the last row is not the only row, all numbers, right to left
          output = [...output, ...row.reverse()];
        } else if (counter !== 0) {
          // if the last row is not the only row, and we're reversing, remove the first item
          output = [...output, row.shift()];
        }

        if (rows.length > 1 && !reversed) { 
          // if there's more than one row and we're not reversed yet, count down
          counter--;
        } else if (rows.length) {
          // otherwise, start over
          counter = 0;
        }

        if (!reversed) {
          // if counting up, remove the first and last rows since we're done with them
          rows.shift();
          rows.pop();
        }

        // when we're done with the last row, change directions 
        if (rows.length > 1) {
          reversed = !reversed;
        }
      } else {
        if (counter !== 0) {
          // if row is a middle row, remove first or last item from row
          if (!reversed) {
            // if counting up, remove last item
            output = [...output, row.pop()];
          }
        }
        counter++;
      } 
    } else {
      // if the counter is out of bounds, count down
      counter--;
    }
  }
 
  return output;
};

export default class Task1 extends React.Component {
  state = {
    output: '',
  };

  onClickUnwind = () => {
    const output = window.clockwiseMatrix(this.valueInput.value);
    this.setState({
      output,
    });
  };

  render() {
    const defaultInputValue = `[1, 2]\n[3, 4]`;

    return (
      <div className='container'>
        <div className='row text-center'>
          <div className='col-xs-12'>
            <div className='alert alert-warning'>
              The function should accept a string representing the matrix as
              shown below: brackets around each row of comma-separated integers,
              and a newline between each row.
              <br />
              The function should return the solution string of comma-separated
              integers.
            </div>
            <p className='App-intro'>
              Write a function that given a matrix of integers, builds a string
              with the entries of that matrix appended in clockwise order. Feel
              free to change this view as much as necessary to adequately solve
              the problem.
            </p>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='form-group'>
                <label htmlFor='value'>Spiral Matrix</label>
                <textarea
                  ref={(c) => {
                    this.valueInput = c;
                  }}
                  type='text'
                  id='value'
                  rows='10'
                  className='form-control'
                  defaultValue={defaultInputValue}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='output'>Output</label>
                <input
                  type='text'
                  id='output'
                  readOnly
                  className='form-control'
                  placeholder='1,2,4,3'
                  value={this.state.output}
                />
                <br />
                Expected: 1,2,4,3
              </div>
              <button id="button" className='btn btn-default' onClick={this.onClickUnwind}>
                Unwind Matrix
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
