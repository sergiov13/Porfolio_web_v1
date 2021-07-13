import styled from 'styled-components'

export const StyleSection = styled.div`
  .section {
    display: flex;
    justify-content: center;
    padding: 100px 170px;
    background: #171c28;
    @media screen and (max-width: 768px) {
      display:block;
        padding: 50px 35px;
    }
    &__title {
      font-size: 18px;
      flex-shrink: 10;
      width: 200px;
      margin-right: 70px;
      color: #35bdb0;
      text-transform: uppercase;
      text-align: left;
      font-weight: 700;
      letter-spacing: 2px;
    }
    &__content {
      font-weight: 300;
      font-size: 1rem;
      width: 100%;
      max-width: 650px;
      @media screen and (max-width: 768px) {
        display: block;
        padding: 30px 30px 0 0;
    }
      p {
        margin-top: 0;
        margin-bottom: 25px;
      }
      .underline-link {
        position: relative;
        display: inline-block;
        &:after {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 1px;
          background: White;
          content: '';
          opacity: 0;
          transition: height 0.3s, opacity 0.3s, transform 0.3s;
          transform: translateY(-5px);
        }
        &:hover,
        &:focus {
          &:after {
            height: 2px;
            border-radius: 3px;
            opacity: 1;
            transform: translateY(-2px);
          }
        }
      }
    }
  }
`

export const StyledText = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 880px) {
     display: flex;
    }
  ul {
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      color: white;
      &:before {
        position: absolute;
        left: 0;
        color: white;
        line-height: 12px;
      }
    }
  }
  .skillz {
    @media screen and (max-width: 880px) {
      display:flex;
      justify-content: space-between;
    }
    &__category {
      @media screen and (max-width: 880px) {
        flex-wrap: wrap;
        width: 47%;
        margin-right: 5px;
        margin-bottom: 25px;
        font-size: 0.9rem;
      }
      &__label {
        font-weight: 700;
        color: white;
        text-transform: uppercase;
      }
      &__item {
        padding: 1px;
        margin: 5px 0;
        font-size: 0.9rem;
      }
    }
  }
}`
