import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`

body{
    background:${({ theme }) => theme.bgColor};
    color:${({ theme }) => theme.textColor};
}
`;
