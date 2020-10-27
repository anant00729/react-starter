import styled from "styled-components";

export const DESKTOP_VIEWPORT = "(min-width: 768px)";

export const Label = styled.label`
  font-size: ${(p) => p.fontSize || `17px`};
  line-height: ${(p) => p.lineHeight || `21px`};
  font-weight: ${(p) => p.fontWeight || `600`};
  color: ${(p) => p.color || `#ffffff`};
`;
export const CloseCircleIcon = styled.img`
  z-index: 2;
  object-fit: contain;
  position: absolute;
  top: 10px;
  right: 10px;
  margin-left: 0;
  align-self: unset;

  @media ${DESKTOP_VIEWPORT} {
    cursor: pointer;
    position: unset;
    margin-left: 16px;
    align-self: flex-start;
  }
`;

export const ChildContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media ${DESKTOP_VIEWPORT} {
    width: unset;
    height: unset;
  }
`;
