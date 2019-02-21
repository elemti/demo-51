import React from 'react';
import styled from 'styled-components';
import logo from './51ScrumLogo.png';
import background from './background.jpg';
import thumb1 from './thumb1.jpg';
import thumb2 from './thumb2.jpg';
import thumb3 from './thumb3.png';

const NavBar = styled.header`
  background-color: white;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  height: 54px;
  display: flex;
`;

const Logo = props => {
  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  `;
  const LogoImage = styled.div`
    height: 50px;
    width: 50px;
    /* border: 1px solid black; */
    /* display: inline-block; */
    /* display: block; */
    /* float: left; */
    margin: auto;
    background: url(${logo}) center center / contain no-repeat;
  `;
  const Title = styled.p`
    padding: 0 10px;
    color: #999999;
    font-size: 20px;
  `;

  return (
    <Wrapper>
      <LogoImage></LogoImage>
      <Title>51스크럼 포털</Title>
    </Wrapper>
  );
};

const SearchIcon = props => {
  const Svg = props => <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512" className="Main-nav__icon Main-nav__icon--search"><title>Search</title><path d="M221.414 12.31C105.96 12.31 12 106.164 12 221.475c0 115.34 93.96 209.202 209.452 209.202 41.684 0 80.52-12.4 113.205-33.512l89.652 89.576c17.304 17.267 45.413 17.267 62.697 0 17.342-17.322 17.304-45.374 0-62.677l-89.634-89.5c21.13-32.646 33.512-71.406 33.512-113.09-.02-115.31-93.92-209.163-209.47-209.163zm167.5 209.165c0 92.267-75.136 167.27-167.462 167.27-92.344 0-167.462-75.04-167.462-167.27 0-92.22 75.118-167.25 167.462-167.193 92.326 0 167.424 74.973 167.463 167.193z"></path></svg>;
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return <Wrapper><Svg></Svg></Wrapper>;
};

const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  > * {
    padding: 0 15px;
    cursor: pointer;
  }
`;

const NavItem = styled.h4`
  display: flex;
  margin: auto 0;
`;

const Section = class extends React.Component {
  Wrapper = styled.div`
    padding: 40px 40px 0 40px;

    &:last-child {
      padding-bottom: 40px;
    }
  `;
  InnerWrapper = styled.div`
    display: flex;
  `;
  Title = styled.h2`
    margin: unset;
    /*padding: 15px 0;*/
  `;
  Item = styled.div`
    /*border: 1px solid;*/
    margin: 10px;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  Image = styled.div`
    overflow: hidden;
    border: 1px solid #ced4da;
    border-radius: 8px;
    width: 404px;
    height: 227px;
    background: white url(${props => props.url}) center center / cover no-repeat;
    ${props => props.active && 'border-color: #8686ff;'}

    ${this.Item}:hover & {
      border-color: #8686ff;
    }
  `;
  ItemTitle = styled.div`
    padding: 0.69444rem;
    font-weight: bold;
    color: #065280;
  `;
  PreviewWrapper = styled.div`
    height: 0px;
    ${props => props.expand && `height: 500px;`}
    background: #222222;
    margin: 0 -40px;
    position: relative;
    transition: height 0.3s ease-out;
    overflow: hidden;
    display: flex;
  `;
  ItemArrow = props => {
    const Wrapper = styled.div`
      height: 14px;
      position: absolute;
      bottom: -10px;
      width: 30px;
      display: flex;
      justify-content: center;
      overflow: hidden;

      > div {
        transform: rotate(-45deg);
        width: 20px;
        height: 20px;
        background: #222222;
        margin-top: 4px;
      }
    `;

    return <Wrapper><div /></Wrapper>;
  };
  closePreview = () => {
    const { itemOnClick, previewingItemId, items } = this.props;
    itemOnClick(items.find(item => item.id === previewingItemId));
  };
  CloseBtn = props => {
    const Btn = styled.div`
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      cursor: pointer;
      color: white;
      font-size: 28px;
    `;
    return <Btn onClick={this.closePreview}>✕</Btn>;
  }
  VideoWrapper = styled.div`
    display: flex;
    width: 65%;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    padding: 20px 0 20px 20px;

    > iframe {
      width: 100%;
      height: 100%;
    }
  `;
  Desc = {
    Wrapper: styled.div`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 20px;
    `,
    Title: styled.div`
      font-weight: bold;
      padding-bottom: 25px;
      font-size: 30px;
    `,
    Subs: styled.div`
    `,
  };
  render() {
    const {
      props,
      state,
      Wrapper,
      InnerWrapper,
      Title,
      Item,
      Image,
      ItemTitle,
      PreviewWrapper,
      ItemArrow,
      CloseBtn,
      VideoWrapper,
      Desc,
    } = this;
    const items = props.items || [];
    const previewingItem = items.find(item => item.id === props.previewingItemId);
    return (
      <Wrapper ref={props._ref}>
        <Title>{props.title}</Title>
        <InnerWrapper>
          {items.map((item, i) => {
            const isActive = props.previewingItemId === item.id;
            return (
              <Item
                key={item.id || `default-key-${i}`}
                onClick={e => props.itemOnClick(item)}
              >
                <Image url={item.imageUrl} active={isActive}></Image>
                <ItemTitle>{item.title}</ItemTitle>
                {isActive && <ItemArrow />}
              </Item>
            );
          })}
        </InnerWrapper>
        <PreviewWrapper expand={!!previewingItem}>
          {previewingItem && (
            <React.Fragment>
              <CloseBtn></CloseBtn>
              <VideoWrapper>
                <iframe
                  title={previewingItem.id}
                  src={previewingItem.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoWrapper>
              <Desc.Wrapper>
                <Desc.Title>{previewingItem.title}</Desc.Title>
                <Desc.Subs>{previewingItem.desc}</Desc.Subs>
              </Desc.Wrapper>
            </React.Fragment>
          )}
        </PreviewWrapper>
      </Wrapper>
    );
  };
}

const Footer = class extends React.Component {
  BottomBar = styled.div`
    background: black;
    color: white;
    height: 50px;
    padding: 0 80px;
    display: flex;
  `;
  BarItem = styled.p`
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    margin: auto 0;
    padding: 0 15px;
  `;
  Info = {
    Wrapper: styled.div`
      background: white;
      border-top: 3px solid #dcdcdc;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 0 40px 0;
    `,
    Title: styled.div`
      font-size: 36px;
      font-weight: 100;
      padding-bottom: 30px;
      color: gray;
      font-family: "Helvetica Neue Custom", "Helvetica Neue", Helvetica, Arial, sans-serif;
    `,
    Desc: styled.div`
      color: gray;
      max-width: 500px;
      text-align: center;
    `,
  }
  render() {
    return (
      <React.Fragment>
        <this.Info.Wrapper>
          <this.Info.Title>About Us</this.Info.Title>
          <this.Info.Desc>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </this.Info.Desc>
        </this.Info.Wrapper>
        <this.BottomBar>
          <this.BarItem>About</this.BarItem>
          <this.BarItem>Policy</this.BarItem>
          <this.BarItem>FAQ</this.BarItem>
          <this.BarItem>Help</this.BarItem>
        </this.BottomBar>
      </React.Fragment>
    );
  }
};

const Banner = props => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height: 42.857vw;
    min-height: 500px;
    background: url(${background}) center center / cover no-repeat;
    font-family: "Helvetica Neue Custom", "Helvetica Neue", Helvetica, Arial, sans-serif;
  `;
  const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    padding: 20px 0;
  `;
  const SmallTitle = styled.div`
    padding: 15px 0;
    font-size: 20px;
  `;
  const ItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `;
  const Item = styled.div`
    padding: 10px 19px;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 26px;
    margin: 5px 7px;
    cursor: pointer;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
      color: rgb(0, 0, 0);
    }
  `;
  const items = props.items || [];
  return (
    <Wrapper>
      <Title>51Scrum Portal</Title>
      <SmallTitle>Our Services</SmallTitle>
      <ItemsWrapper>
        {items.map((item, i) => {
          return (
            <Item
              key={item.id || `default-key-${i}`}
              onClick={item.onClick}
            >{item.name}</Item>
          );
        })}
      </ItemsWrapper>
    </Wrapper>
  );
};

const scrollIntoView = (el, opts = {}) => {
  try {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', ...opts });
  } catch (err) {}
};

const Body = class extends React.Component {
  state = { previewingItemId: null };
  operationSection = React.createRef();
  testSection = React.createRef();

  Wrapper = styled.div`
    background: #f0f0f0;
    min-height: 500px;
    /*padding: 30px 0;*/
  `;

  itemOnClick = item => {
    const { previewingItemId } = this.state;
    if (previewingItemId === item.id) {
      // close preview
      return this.setState({ previewingItemId: null });
    }

    this.setState({ previewingItemId: item.id });
  };

  render() {
    return (
      <this.Wrapper>
        <Banner
          items={[
            {
              name: 'Operation',
              onClick: e => scrollIntoView(this.operationSection.current),
            },
            {
              name: 'Test',
              onClick: e => scrollIntoView(this.testSection.current),
            },
          ]}
        ></Banner>
        <Section
          title="51스크럼 운영 서비스"
          _ref={this.operationSection}
          itemOnClick={this.itemOnClick}
          previewingItemId={this.state.previewingItemId}
          items={[
            {
              id: 1,
              title: 'CallMon',
              desc: '현재 방송 상품의 상담원, ARS 콜, 모바일 주문 진입 고 객 수 제공',
              videoUrl: 'https://www.youtube.com/embed/hA6hldpSTF8?autoplay=1',
              imageUrl: thumb3,
            },
            {
              id: 2,
              title: 'SocialHits',
              desc: '네이버 베스트 100 상품 크롤링, GS 검색어 데이터 제공',
              videoUrl: 'https://www.youtube.com/embed/0LHxvxdRnYc?autoplay=1',
              imageUrl: thumb3,
            },
          ]}
        ></Section>
        <Section
          title="Test"
          _ref={this.testSection}
          itemOnClick={this.itemOnClick}
          previewingItemId={this.state.previewingItemId}
          items={[
            {
              id: 3,
              title: 'BroadcastMon',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              videoUrl: 'https://www.youtube.com/embed/tg52up16eq0?autoplay=1',
              imageUrl: thumb3,
            },
            {
              id: 4,
              title: 'ProductMon',
              desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
              videoUrl: 'https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1',
              imageUrl: thumb3,
            },
          ]}
        ></Section>
      </this.Wrapper>
    );
  }
};

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <Logo />
          <NavItems>
            <NavItem>워크 플레이스 채널</NavItem>
            <NavItem>LOG IN</NavItem>
            <SearchIcon />
          </NavItems>
        </NavBar>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default MainPage;
