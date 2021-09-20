import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/Input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SCountainer>
      <Input placeholder="検索ワード" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SCountainer>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SCountainer = styled.div`
  display: flex;
  align-items: center;
`;
