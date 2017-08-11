import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import bannerImg8 from "web_modules/images/08.jpg";

const smartItems = [
  [
    {
      title: "1、喷洒到毛刷上的水不足",
      content: ["(1)水阀是否打开。", "(2)溶液箱有没有水。"]
    },
    {
      title: "2、洗涤效果不佳",
      content: ["检查刷子的磨损状况，当刷毛长度小于15mm时应予更换。"]
    }
  ],
  [
    {
      title: "3、吸水扒不能完全吸干地面",
      content: [
        "(1)检查橡胶条是否干净。",
        "(2)调整吸水扒的倾斜度。",
        "(3)真空管的安装是否正确",
        "(4)拆下整个真空系统总成并予以清洗。",
        "(5)如橡胶条磨损严重则换之。",
        "(6)检查真空电机是否打开。",
        "(7)调整吸水扒高度。"
      ]
    }
  ],
  [
    {
      title: "4、产生了过多泡沫",
      content: [
        "(1)是否使用了低泡清洗剂，如有需要，往污液箱内加入少量的抗泡剂。",
        "(2)地面不太脏导致过多泡沫的产生，此时应该减少清洁剂的使用量。"
      ]
    }
  ]
];

const cleverItems = [
  [
    {
      title: "1、喷洒到毛刷上的水不足",
      content: ["(1)水阀是否打开。", "(2)溶液箱有没有水。", "(3)电磁阀是否打开。"]
    },
    {
      title: "2、洗地效果不佳",
      content: ["检查刷子的磨损状况，当刷毛长度小于15mm时应予更换。"]
    }
  ],
  [
    {
      title: "3、吸水扒不能完全吸干地面",
      content: [
        "(1)检查橡胶条是否干净。",
        "(2)调整吸水扒倾斜度。",
        "(3)真空管安装是否正确。",
        "(4)拆下整个真空系统总成并予以清洗。",
        "(5)如橡胶条磨损严重则更换之。",
        "(6)检查真空电机是否打开。",
        "(7)调整吸水扒高度。"
      ]
    }
  ],
  [
    {
      title: "4、产生过多泡沫",
      content: [
        "(1)是否使用了低泡清洁剂，如有需要，往污液箱内加入少量的抗泡剂。",
        "(2)地面不太脏导致过多泡沫的产生，此时应减少清洁剂的使用量。"
      ]
    }
  ]
];

const rangerItems = [
  [
    {
      title: "1、机器不能启动",
      content: ["(1)确保机器连接器已经连接到蓄电池连接器", "(2)检查钥匙开关处于“开”位置。", "(3)检查蓄电池是否有电。"]
    },
    {
      title: "2、刷盘上供水不足",
      content: [
        "(1)检查溶液箱是否有水",
        "(2)检查水阀是否已经打开。",
        "(3)请立即器前部的溶液箱过滤器",
        "(4)检查电磁阀是否正常。"
      ]
    }
  ],
  [
    {
      title: "3、吸水扒吸水效果不理想",
      content: [
        "(1)检查吸水扒是否清洁，必要时请清理。",
        "(2)检查吸水扒的调节。",
        "(3)清理全部的吸水部件。",
        "(4)如果挂条已经磨损，请更换之。"
      ]
    },
    {
      title: "4、机器的清洗效果不理想",
      content: [
        "(1)检查毛刷的磨损状态，必要时请将其更换之，当毛刷长度小于15mm时英语更换，使用过度磨损的毛刷可能会损坏地板。",
        "(2)使用与标配不同类型的毛刷，若要清洗有顽固污渍的地板，推荐使用根据需求并按照要求提供的专用毛刷。"
      ]
    },
    {
      title: "5、产生过多的泡沫",
      content: [
        "(1)请核实使用的清洁剂为低泡清洁剂。必要时请在回收箱里面加入少量液体防泡剂。",
        "(2)请记住在地板不太脏时会产生更多的泡沫，在在这种情况下应该进一步稀释清洁剂溶液。"
      ]
    }
  ],
  [
    {
      title: "6、真空电机功能丧失",
      content: [
        "(1)检查回收箱是否已经加满，如有必要，清空之。",
        "(2)操作者必须坐在正确的驾驶位置上。",
        "(3)检查没有过热的保护装置启动。",
        "(4)检查电机是否正确连接至脚踏板下面的电源线接线端子。"
      ]
    },
    {
      title: "7、保险丝和过热保护",
      content: [
        "改进其除了安装有80A的总保险丝以外，还在电器系统中装有可恢复保险丝，当机器超过额定负载运行时能够切断毛刷和抽吸电机的电源，要恢复电机的电源时，请关闭机器并等待保险丝冷却（大约60秒），然后按下保险丝的按钮，使其复位。如果保险丝再次断开，请联系贝纳特技术服务中心。"
      ]
    },
    {
      title: "8、机器不能后退",
      content: [
        "(1)检查是否在后退期间已经提起吸水扒。",
        "(2)操作者必须坐在争取的驾驶位置上。",
        "(3)检查没有过热保护装置启动。"
      ]
    }
  ]
];

const hussarItems = [
  [
    {
      title: "1、机器不能启动",
      content: ["(1)确保机器连接器已经连接到蓄电池连接器", "(2)检查钥匙开关处于“开”位置。", "(3)检查蓄电池是否有电。"]
    },
    {
      title: "2、刷盘上供水不足",
      content: [
        "(1)检查溶液箱是否有水",
        "(2)检查水阀是否已经打开",
        "(3)清理机器前部的溶液过滤器。",
        "(4)检查电磁阀是否正常。"
      ]
    }
  ],
  [
    {
      title: "3、吸水扒吸水效果不理想",
      content: [
        "(1)检查吸水扒是否清洁，必要时请清理。",
        "(2)检查吸水扒的调节。",
        "(3)清理全部的吸水部件。",
        "(4)如果刮条已经磨损，请更换之。"
      ]
    },
    {
      title: "4、机器清洗效果不理想",
      content: [
        "(1)检查毛刷的磨损状态，必要时请将其更换，当毛刷长度小于15mm时应予更换。使用过度磨损的毛刷可能会损坏地板。",
        "(2)使用与标配不同类型的毛刷，若要清洗有顽固污渍的地板，推荐使用根据需求并按照要求提供专用毛刷。"
      ]
    },
    {
      title: "5、产生过多泡沫",
      content: [
        "(1)请核实使用的清洁剂为低泡清洁剂。必要时请在回收箱里面加入少量液体防泡剂。",
        "(2)请记住在地板不太脏是会产生更多的泡沫，在这种情况下，应该进一步稀释清洁剂溶液。"
      ]
    }
  ],
  [
    {
      title: "6、毛刷电机不工作",
      content: [
        "(1)检查前进时是否已经放下毛刷基座。",
        "(2)操作者必须坐在正确驾驶位置上。",
        "(3)检查没有过热的保护装置启动。",
        "(4)检查电机是否正确连接至脚踏板下的电源线接线端子。"
      ]
    },
    {
      title: "7、保险丝和过热保护",
      content: [
        "该机器除了有安装有80A的总保险丝以外,还在电器系统中装有可恢复的保险丝，当机器超过额定负载运行时能够切断毛刷和抽吸电机的电源。要恢复电机的电源时，请关闭机器并等待保险丝冷却（大约60秒），然后按下保险丝的按钮使其复位。如果保险丝再次断开，请联系贝纳特技术服务中心。"
      ]
    },
    {
      title: "8、机器不能后退",
      content: [
        "(1)检查是否在后退期间已经提起吸水扒。",
        "(2)操作者必须坐在正确的驾驶位置上。",
        "(3)检查没有过热保护装置启动。"
      ]
    }
  ]
];

const dragoonItems = [
  [
    {
      title: "1、机器不能启动",
      content: ["(1)确保机器连接器已经连接到蓄电池连接器。", "(2)检查钥匙开关处于“开”的位置。", "(3)检查蓄电池是否有电。"]
    },
    {
      title: "2、刷盘上供水不足",
      content: [
        "(1)检查溶液箱是否有水",
        "(2)检查水阀是否打开",
        "(3)清理机器前部的溶液过滤器。",
        "(4)检查电磁阀是否正常工作。"
      ]
    },
    {
      title: "3、吸水扒吸水效果不理想",
      content: [
        "(1)检查吸水扒是否清洁，必要时请清理。",
        "(2)检查吸水扒的调节",
        "(3)清理全部的吸水部件。",
        "(4)如果刮条已经磨损，请及时更换。"
      ]
    }
  ],
  [
    {
      title: "4、机器的清洗效果不理想",
      content: [
        "(1)检查毛刷的磨损状态，必要时请将其更换。当毛刷只有大约15mm长时就应更换毛刷，使用过度磨损的毛刷可能会损坏地板。",
        "(2)使用与标配不同类型的毛刷。若要清洗油顽固污渍的地板，推荐使用根据需要并按照要求提供的专用毛刷。"
      ]
    },
    {
      title: "5、产生过多的泡沫",
      content: [
        "(1)请核实使用的清洁剂为低泡清洁剂，必要时请在回收箱里加入少量的液体防泡剂。",
        "(2)请记住在地板不太脏时会产生更多泡沫，在这种情况下应进一步稀释清洁剂溶液。"
      ]
    },
    {
      title: "6、真空电机功能丧失",
      content: ["(1)检查回收箱是否已满，如果必要，清空它。", "(2)检查真空盖上的浮空开关。"]
    }
  ],
  [
    {
      title: "7、毛刷电机不工作",
      content: [
        "警告：为防止损坏地板，只有当机器前进时毛刷电机才能正常运行。",
        "(1)检查前进时是否已经放下毛刷基座。",
        "(2)操作者必须坐在正确的驾驶位置上.",
        "(3)检查没有过热保护装置启动",
        "(4)检查电机是否正确连接至脚踏板下的电源接线端子。"
      ]
    },
    {
      title: "8、保险丝和过热保护装置",
      content: [
        "该机器除安装有80A的总保险丝外，还在电气系统中安装了可恢复保险丝，当机器超过耳钉负载运行时能够切断毛刷和吸水电机的电源，要回复电机的电源时，请关掉机器并等待保险丝冷却（大约60秒），然后按下保险丝的按钮使其复位。如果保险丝再次断开，请联系贝纳特技术服务中心。",
        "注意：抓住拉手打开储物室的拉门，可恢复保险丝安装在储物室的顶部。"
      ]
    },
    {
      title: "9、机器不能后退",
      content: [
        "警告：为了防止损坏吸水扒，只有提起吸水扒时后退功能才能正常工作。",
        "(1)检查是否在后退期间已经提起吸水扒",
        "(2)操作者必须坐在正确的驾驶位置上。",
        "(3)检查没有过热保护装置启动。"
      ]
    }
  ]
];

const tornadoItems = [
  [
    {
      title: "1、机器不能启动",
      content: ["(1)确保机器连接器已连接到蓄电池连接器。", "(2)检查钥匙开关处于“开”位置。", "(3)检查蓄电池是否有电"]
    },
    {
      title: "2、工作期间扬尘",
      content: [
        "(1)确保有效抽吸作用的橡胶挡板严重磨损，必要时请更换。",
        "(2)过滤器阻塞，彻底清理过滤器。",
        "(3)垃圾斗错位，重新安装。"
      ]
    }
  ],
  [
    {
      title: "3、清扫效果不理想",
      content: [
        "(1)检查毛刷的磨损状态，必要时请将其更换，当毛刷磨损超过25mm时就应该更换.使用过度的毛刷可能会损坏地板。",
        "(2)使用与标配不同类型的毛刷，若要清扫有顽固污渍的地板，推荐使用根据需求并按照要求提供的专用毛刷。",
        "(3)边刷磨损了。",
        "(4)垃圾斗已满，请彻底清空。"
      ]
    },
    {
      title: "4、滚刷噪音过大或变化",
      content: ["(1)刷子上缠绕杂物，应及时清理。"]
    }
  ],
  [
    {
      title: "5、保险丝和过热保护",
      content: [
        "该机器除了有安装有80A的总保险丝以外，还在电器系统中装有可恢复保险丝，当机器超过额定负载运行时能够切断毛刷和抽吸电机的电源。要恢复电机的电源时，请关闭机器并等待保险丝冷却（大约60秒），然后按下保险的按钮使其复位，如果保险丝再次断开，请联系贝纳特技术服务中心。",
        "(1)抓住拉手打开储物室的拉门，可恢复保险丝安装在储物室的顶部。",
        "(2)专注座椅箱的后部并举起座椅箱知道固定安全托架的末端，可恢复保险丝安装在电池组的右侧。"
      ]
    }
  ]
];

const pxspxItems = [];

/*
 * 常见故障
 * */

export default class Malfunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: smartItems
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getItem(type);
  }

  componentWillReceiveProps(Props) {
    if (Props.type !== this.props.type) {
      const { type } = Props;
      this.getItem(type);
    }
  }

  getItem = type => {
    switch (type) {
      case "MalfunctionSmart":
        this.setState({
          items: smartItems
        });
        break;
      case "MalfunctionClever":
        this.setState({
          items: cleverItems
        });
        break;
      case "MalfunctionRanger":
        this.setState({
          items: rangerItems
        });
        break;
      case "MalfunctionHussar":
        this.setState({
          items: hussarItems
        });
        break;
      case "MalfunctionDragoon":
        this.setState({
          items: dragoonItems
        });
        break;
      case "MalfunctionTornado":
        this.setState({
          items: tornadoItems
        });
        break;
      case "MalfunctionPX&SPX":
        this.setState({
          items: pxspxItems
        });
        break;
    }
  };

  render() {
    const { items } = this.state;
    const content = [];
    items.map((item, indexs) => {
      const lists = [];
      item.map((it, index) => {
        let lisItem = [];
        if (it.hasOwnProperty("content")) {
          const list = [];
          it.content.map((i, ind) => {
            list.push(
              <p
                className={
                  ind === it.content.length - 1 && index < item.length - 1
                    ? "font-fang-song mb20"
                    : "font-fang-song"
                }
                key={`${it.title}-${index}-${ind}`}
              >
                {i}
              </p>
            );
          });
          list.unshift(
            <p key={it.title} className="textWeight">
              {it.title}
            </p>
          );
          lisItem = list;
        }
        lists.push(lisItem);
      });
      content.push(
        <Col key={indexs} span={8} className="malfunctionItem">
          {lists}
        </Col>
      );
    });
    return (
      <div className="productServerContainer">
        <div className="productServerBanner">
          <img src={bannerImg8} />
        </div>
        <div className="textContent">
          <p className="title">
            {this.props.type.slice(11)} 系列常见故障排除：
          </p>
          <Row className="malfunction">
            {content}
            {/*<Col span={8} className="malfunctionItem">*/}
            {/*<p className="textWeight">1、喷洒到毛刷上的水不足</p>*/}
            {/*<p className="font-fang-song">(1)水阀是否打开</p>*/}
            {/*<p className="font-fang-song mb20">(2)溶液箱有没有水</p>*/}
            {/*<p className="textWeight">2、洗涤效果不佳</p>*/}
            {/*<p className="font-fang-song">检查刷子的磨损状况，当刷毛长度小于15mm时应予更换</p>*/}
            {/*</Col>*/}
            {/*<Col span={8} className="malfunctionItem">*/}
            {/*<p className="textWeight">3、吸水扒不能完全吸干地面</p>*/}
            {/*<p className="font-fang-song">(1)检查橡胶条是否干净。</p>*/}
            {/*<p className="font-fang-song">(2)调整吸水扒的倾斜度。</p>*/}
            {/*<p className="font-fang-song">(3)真空管的安装是否正确</p>*/}
            {/*<p className="font-fang-song">(4)拆下整个真空系统总成并予以清洗。</p>*/}
            {/*<p className="font-fang-song">(5)如橡胶条磨损严重则换之。</p>*/}
            {/*<p className="font-fang-song">(6)检查真空电机是否打开。</p>*/}
            {/*<p className="font-fang-song">(7)调整吸水扒高度。</p>*/}
            {/*</Col>*/}
            {/*<Col span={8} className="malfunctionItem">*/}
            {/*<p className="textWeight">4、产生了过多泡沫</p>*/}
            {/*<p className="font-fang-song">*/}
            {/*(1)是否使用了低泡清洗剂，如有需要，往污液箱内加入少量的抗泡剂。*/}
            {/*</p>*/}
            {/*<p className="font-fang-song">(2)地面不太脏导致过多泡沫的产生，此时应该减少清洁剂的使用量。</p>*/}
            {/*</Col>*/}
          </Row>
        </div>
      </div>
    );
  }
}
