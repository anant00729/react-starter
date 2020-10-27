import styled, { css } from "styled-components";
import { DESKTOP_VIEWPORT } from "common/styles";
import Flex from "common/Flex";
import { ZINDEX_LEVELS } from "common/constants";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  object-fit: scale-down;
  position: relative;
`;
