import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SOURCE_CODE,
  AGENCY_CODE,
  DEFAULT_SCHEME,
  validateRecordContent,
  recordToMarcXml
} from '../tools/harvesters/umpsa/harvester.js';

test('UMPSA Harvester Configuration', () => {
  assert.equal(SOURCE_CODE, 'umpsa');
  assert.equal(AGENCY_CODE, 'UMPSA');
  assert.equal(DEFAULT_SCHEME, 'LCC');
});

test('UMPSA Record Conversion to MARCXML', () => {
  const dummy = {
    id: 101,
    title: 'Pengantar Sains Perpustakaan',
    author: 'Ahmad bin Abdullah',
    callNumber: 'Z665 .A36 2020',
    publication: 'Pahang : Penerbit Universiti Malaysia Pahang Al-Sultan Abdullah, 2020.',
    physicalDescription: 'xiv, 250 ms. : il. ; 25 cm.',
    subject: 'Library science -- Malaysia'
  };
  const xml = recordToMarcXml(dummy);
  assert.ok(xml, 'Should produce MARCXML');
  assert.ok(xml.includes('<record'), 'XML should contain record open tag');
  assert.ok(xml.includes('</record>'), 'XML should contain record close tag');
  assert.ok(xml.includes('tag="050"'), 'XML should contain LCC call number tag 050');
  assert.ok(xml.includes('tag="996"'), 'XML should contain provenance tag 996');
  assert.ok(validateRecordContent(xml), 'Generated MARCXML must pass validation');
});
