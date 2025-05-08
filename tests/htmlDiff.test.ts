import { removeTagAttributes } from '../src/htmlDiff';
import { htmlDiff } from '../src/index';
import { originalHTML as originalHTML1, newHTML as newHTML1, diffHTML as diffHTML1 } from './fixtures/htmlExample1';
import {
  originalHTML as originalHTML2,
  newHTML as newHTML2,
  diffHTML as diffHTML2,
  originalHTMLWithoutAttributes as originalHTMLWithoutAttributes2,
} from './fixtures/htmlExample2';
import { describe, it, expect } from 'vitest';

describe('removeTagAttributes', () => {
  it('should remove tag attributes', async () => {
    const withoutAttributes = removeTagAttributes(originalHTML2);
    expect(withoutAttributes).toEqual(originalHTMLWithoutAttributes2);
  });
});

describe('htmlDiff', () => {
  it('should add tags to show the insertions and the deletions', async () => {
    const diff = htmlDiff(originalHTML1, newHTML1);
    expect(diff).toEqual(diffHTML1);
  });
  // @bugfix if the html contains attributes, the diff is not correct
  // in our case there was a style attribute and colspan and rowspan attributes in the new html
  // and in the diff, the tags with different attributes were duplicated so we had extra columns in the table
  it('should remove the html tags before comparing', async () => {
    const diff = htmlDiff(originalHTML2, newHTML2);
    expect(diff).toEqual(diffHTML2);
  });
});
