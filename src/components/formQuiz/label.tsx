import React from 'react';

interface VecLabelType {
  id: number;
  name: string;
  value: number;
  response: string;
}

interface Params {
  handleChange: (preguntaIndex: number, respuestaIndex: number) => void;
  v: VecLabelType;
}

const LabelComponent = ({ v, handleChange }: Params) => {
  return (
    <label>
      <input
        type="checkbox"
        name={v.name}
        value={v.response}
        onChange={() => handleChange(0, v.id)}
      />
      {v.response}
    </label>
  );
};

export default LabelComponent;