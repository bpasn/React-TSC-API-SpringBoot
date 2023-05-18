import React from 'react'
import { FormGroup } from '../../../page/admin/ecommerce/addProduct/AddProductStyle'
import styled from '@emotion/styled'


type Props = {

} & React.HTMLAttributes<HTMLOrSVGElement>;
export const TextAreaCustom = styled('textarea')({
  display: 'block',
  width: '100%',
  // height: 'calc(1.5em + .75rem + 10px)',
  padding: '10px .75rem',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.5,
  color: '#495057',
  backgroundColor:'#fff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  borderRadius: '30px',
  transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  '&:hover':{
    backgroundColor: "#fff",
    color: '#3232b7',
    boxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.2)',
    willChange: 'opacity, transform',
    transition: 'all 0.3s ease-out',
    webkitTransition: 'all 0.3s ease-out',
  }

})
const TextAreaCustomComponent:React.FC<Props> = (props: Props) => {
  return <TextAreaCustom rows={4} cols={5}/>
}

export default TextAreaCustomComponent