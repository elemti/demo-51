import React from 'react';
import styled from 'styled-components';
import logo from './51ScrumLogo.png';
import background from './background.jpg';
import { services, apps } from './services';

const sleep = ms => new Promise(res => setTimeout(res, ms));

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
    padding-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: column;

    &:last-child { padding-bottom: 40px; }
    &:first-child { padding-top: 40px; }
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
      border-color: black;
    }

    @media (max-width: 1350px) {
      width: 352px;
      height: 198px;
    }
  `;
  ItemTitle = styled.div`
    padding: 0.69444rem;
    font-weight: bold;
    color: #065280;
  `;
  Preview = {
    Wrapper: styled.div`
      height: 0px;
      ${props => props.expand && `height: 500px;`}
      position: relative;
      transition: height 0.3s ease-out;
      display: flex;
      flex-direction: column;
    `,
    Body: styled.div`
      align-self: center;
      display: flex;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100vw;
      background: #222222;
      overflow: hidden;
    `,
  };
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
      Wrapper,
      InnerWrapper,
      Title,
      Item,
      Image,
      ItemTitle,
      Preview,
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
        <Preview.Wrapper expand={!!previewingItem}>
          <Preview.Body>
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
          </Preview.Body>
        </Preview.Wrapper>
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
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
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

const Banner = class extends React.Component {
  Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height: 40vw;
    min-height: 500px;
    background: url(${background}) center center / cover no-repeat;
    font-family: "Helvetica Neue Custom", "Helvetica Neue", Helvetica, Arial, sans-serif;
  `;
  Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    padding: 20px 0;
  `;
  SmallTitle = styled.div`
    padding: 15px 0;
    font-size: 20px;
  `;
  ItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `;
  Item = styled.div`
    padding: 10px 19px;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 26px;
    margin: 5px 7px;
    cursor: pointer;
    color: white;
    opacity: 0;
    transition: opacity 1s ease-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
      color: rgb(0, 0, 0);
    }
  `;
  componentDidMount() {
    Object.values(this.itemRefs).forEach(async (itemRef, i) => {
      await sleep((i+4) * 180);
      itemRef.current.style.opacity = 1;
    });
  }
  itemRefs = {};
  render() {
    const {
      props,
      Wrapper,
      Title,
      SmallTitle,
      ItemsWrapper,
      Item,
    } = this;
    const items = props.items || [];
    return (
      <Wrapper>
        <Title>51Scrum Portal</Title>
        <SmallTitle>Our Services</SmallTitle>
        <ItemsWrapper>
          {items.map((item, i) => {
            const itemRef = this.itemRefs[item.id] = React.createRef();
            return (
              <Item
                ref={itemRef}
                key={item.id}
                onClick={item.onClick}
              >{item.name}</Item>
            );
          })}
        </ItemsWrapper>
      </Wrapper>
    );
  }
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
    display: flex;
    flex-direction: column;
  `;
  SectionsWrapper = styled.div`
    margin: 0 auto;
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
          items={services.map(service => ({
            ...service,
            onClick: e => {
              const ref = this[`section-ref-${service.id}`];
              if (ref) scrollIntoView(ref.current);
            },
          }))}
        ></Banner>
        <this.SectionsWrapper>
          {services.map(service => {
            const { id, name, appIds } = service;
            const ref = this[`section-ref-${id}`] = React.createRef();
            return (
              <Section
                key={id}
                _ref={ref}
                title={name}
                itemOnClick={this.itemOnClick}
                items={appIds.map(id => apps.find(app => app.id === id)).filter(x => x)}
                previewingItemId={this.state.previewingItemId}
              ></Section>
            );
          })}
        </this.SectionsWrapper>
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
