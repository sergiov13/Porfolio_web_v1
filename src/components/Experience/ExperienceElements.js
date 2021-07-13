import styled from "styled-components";

export const StyleSection = styled.div`
  .section {
    display: flex;
    justify-content: center;
    padding: 100px 170px;
    background: #171c28;
    @media screen and (max-width: 880px) {
        display: block;
        padding: 50px 35px;
    }
    &__title {
      font-size: 18px;
      flex-shrink: 0;
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
  .jobs {
    margin-bottom: 100px;
    @media screen and (max-width: 880px){
      padding-top: 25px;
      flex-wrap:wrap;
    }
  }
  .job {
    margin-bottom: 25px;
    .time-place {
      display: flex;
      color: white;
      justify-content: space-between;
      @media screen and (max-width: 880px) {
        display: block;
      }
    }
    &__company {
      font-weight: 700;
      color: white;
    }
    &__time {
      font-size: 0.9rem;
      color: white;
      font-family: Inconsolata,monospace;
      @media screen and (max-width: 880px) {
        font-size: 0.8rem;
      }
    }
    &__position {
      color:#ccd6f6;
      padding: 4px 4px 4px 0;
    }
    &__used {
      &__item {
        display: inline-block;
        margin: 3px;
        font-size: 0.75rem;
        font-weight: 700;
        padding: 2px 7px;
        border-radius: 3px;
        color: #35bdb0;
        border: 1px solid #35bdb0;
        background: transparent;
        
        &:first-of-type {
          margin-left: 0;
        }
    }
  }
  .arrow-link {
    font-size: 1.25rem;
    &:after {
      width: 20px;
      height: 20px;
    }
  }
`