import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file'
      });
    }
    // eslint-disable-next-line
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <p>
          <MdCameraAlt size={48} color="#626262" />
          Selecionar Imagem
        </p>
        <img
          src={
            preview || 'https://imagens.canaltech.com.br/236607.471195-Lua.jpg'
          }
          alt=""
        />
        <input
          type="file"
          onChange={handleChange}
          id="banner"
          accept="image/*"
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
}
