import styled from '@emotion/styled';

export const Button = styled('button')(
  {
    all: 'inherit',
    cursor: 'pointer',
  },
  (props) => ({
    fontSize: props.fontSize,
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    color: props.color,
  })
);
