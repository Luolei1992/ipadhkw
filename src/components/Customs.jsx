import React from "react";
import { hashHistory } from "react-router";
import { TableHeads, Customs} from './templates';
import { Modal, List } from 'antd-mobile';

const urls = {
    wordMsg: require('../images/wordMsg.png'),
    custom:require('../images/custom.png')
}
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

export default class Custom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            show2:false,
            modal:false,            
            modal1:false,            
            order:"全部",
            check:"全部",
            company:"",
            job:"",
            name:"",
            phone:"",
            email:"",
            remark:"",
            hasError1:false,
            hasError2:false,
            data: [
                {
                    company: "上海泰宇信息技术有限公司",
                    tag: "年度服务",
                    content: "1.都是空氛围foe扣分点我咖啡我看号入口it日如题个人简介热干面。",
                    remark: "备注带我去二无群二多撒付热无若翁群若群",
                    resean: "条件丰富的的沙发丰富的的沙发丰富的的沙发丰富的的沙发",
                    rules: "验收标准萨达萨达撒的违法人的双方都是",
                    path: urls.custom,
                    duty: "55",
                    visit: "88",
                    summary: "8",
                    validate:"0",
                    relate: ["张三", "李四", "王五"],
                    id:"1"
                },
                {
                    company: "北京齐天大圣科技有限公司",
                    tag: "智能设备",
                    content: "没有什么是理所应当",
                    remark: "这是一场无情的战争，只需成功，不许失败！",
                    resean: "没范德萨范德萨KJM大数据量第三款的撒娇考虑分散",
                    rules: "个付过的风格萨达上的人复古风",
                    path: "",
                    duty: "5",
                    visit: "65",
                    summary: "14",
                    validate: "0",
                    relate: ["张三", "李四", "王五", "赵六"],
                    id:"2"
                }
            ],
            happenTime: "",
            content: "",
            finishTime: "",
            give: ""
        }
    }
    componentDidMount(){
        
    }
    changeOrder(e){
        this.setState({
            order: e.currentTarget.innerHTML,
            show:!this.state.show
        })
    }
    changeCheck(e){  
        this.setState({
            check:e.currentTarget.innerHTML,
            show2: !this.state.show2
        })
    }
    delPerson(e){      //删除联系人
        e.currentTarget.parentNode.style.display = "none";
    }
    showModal = key => (e,id) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
        console.log(id);    //得到对应id的元素
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    onChangePhone(e){
        let val = e.currentTarget.value;
        this.setState({
            hasError1: validate.CheckPhone(val).hasError,
            phone: val
        });
    }
    onChangeEmail(e){
        let val = e.currentTarget.value;
        this.setState({
            hasError2: validate.CheckEmail(val).hasError,
            email: val
        });
    }
    onChangeCompany(e) {
        this.setState({
            company: e.currentTarget.value
        });
    }
    onChangeJob(e){
        this.setState({
            job: e.currentTarget.value
        });
    }
    onChangeName(e){
        this.setState({
            name: e.currentTarget.value
        });
    }
    onChangeRemark(e){
        this.setState({
            remark: e.currentTarget.value
        });
    }
    onChangeHappenTime = (e) => {
        this.setState({
            happenTime: e.currentTarget.value
        })
    }
    onChangeContent = (e) => {
        this.setState({
            content: e.currentTarget.value
        })
    }
    onChangeFinishTime = (e) => {
        this.setState({
            finishTime: e.currentTarget.value
        })
    }
    onChangeGive = (e) => {
        this.setState({
            give: e.currentTarget.value
        })
    }
    render(){
        return (
            <div className="customsLists visitRecordWrap">
                <TableHeads url={urls.wordMsg} isHide={true}></TableHeads>
                <div className="customsHead ">
                    <h3 className="center" onClick={this.showModal('modal')}>
                        我的客户
                    </h3>
                    <div className="right pub">
                        <div className="selectWrap">
                            <span>排序：</span>
                            <div style={{display:"inline-block"}}>
                                <span onClick={() => {
                                    this.setState({
                                        show: !this.state.show
                                    })
                                    this.state.show2 ? this.setState({ show2: false }) : "";                                    
                                }}>{this.state.order} <i className="iconfont icon-tubiao-"></i></span>
                                <ul style={{ display: this.state.show?"block":"none"}}>
                                    <li onClick={(e) => { this.changeOrder(e)}}>全部</li>
                                    <li onClick={(e) => { this.changeOrder(e)}}>最新</li>
                                    <li onClick={(e) => { this.changeOrder(e)}}>即将过期</li>
                                </ul>
                            </div>
                            <span style={{ marginLeft: "0.5rem" }}>筛选：</span>
                            <div style={{display:"inline-block"}}>
                                <span onClick={()=>{
                                    this.setState({
                                        show2: !this.state.show2
                                    })
                                    this.state.show ? this.setState({ show: false }) : "";
                                }}>{this.state.check} <i className="iconfont icon-tubiao-"></i></span>
                                <ul style={{ display: this.state.show2 ? "block" : "none" }}>
                                    <li onClick={(e) => {this.changeCheck(e)}}>全部</li>
                                    <li onClick={(e) => {this.changeCheck(e)}}>合作中</li>
                                    <li onClick={(e) => {this.changeCheck(e)}}>已过期</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    visible={ this.state.modal }
                    transparent
                    maskClosable={true}
                    onClose={this.onClose('modal')}
                    className="personalLinkWrap"
                    footer={[
                        { text: '取消', onPress: () => { console.log('cancle'); this.onClose('modal')(); } },
                        { text: '确定', onPress: () => { console.log('ok'); this.onClose('modal')(); } }
                    ]}
                    // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div className="personalLink">
                        <div className="personalLinkList">
                            <ul>
                                {/* <li>
                                    <span>公司：</span>
                                    <input 
                                        type="text" 
                                        value={this.state.company}
                                        onChange={(e) => { this.onChangeCompany(e)}}
                                    />
                                </li> */}
                                <li>
                                    <span>姓名：</span>
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={(e) => { this.onChangeName(e) }}
                                    />
                                </li>
                                <li>
                                    <span>职位：</span>
                                    <input
                                        type="text"
                                        value={this.state.job}
                                        onChange={(e) => { this.onChangeJob(e) }}
                                    />
                                </li>
                                <li>
                                    <span>手机：</span>
                                    <input
                                        type="text"
                                        value={this.state.phone}
                                        onChange={(e) => { this.onChangePhone(e) }}
                                        className={this.state.hasError1 ?"txtRed":""}
                                    />
                                </li>
                                <li>
                                    <span>邮箱：</span>
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={(e) => { this.onChangeEmail(e) }}
                                        className={this.state.hasError2 ? "txtRed" : ""}                                        
                                    />
                                </li>
                                <li>
                                    <span>备注：</span>
                                    <input
                                        type="text"
                                        value={this.state.remark}
                                        onChange={(e) => { this.onChangeRemark(e) }}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal>
                <div className="mainCustomList">
                    <Customs 
                        dataList={this.state.data} 
                        del={this.delPerson}
                        showModal={this.showModal('modal')}
                        addJobs={this.showModal('modal1')}
                    ></Customs>
                </div>
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={true}
                    onClose={this.onClose('modal1')}
                    style={{ width: "300px" }}
                    className="personalLinkWrap myCustomModal"
                    footer={[
                        { text: '取消', onPress: () => { console.log('cancle'); this.onClose('modal1')(); } },
                        { text: '确定', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }
                    ]}
                >
                    <div className="personalLink">
                        <div className="personalLinkList">
                            <ul>
                                <li>
                                    <span style={{ textAlignLast: "justify", width: "25%" }}>发生时间</span>:
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={(e) => { this.onChangeHappenTime(e) }}
                                        style={{paddingLeft:"5px"}}
                                    />
                                </li>
                                <li>
                                    <span style={{ textAlignLast: "justify", width: "25%" }}>内容</span>:
                                    {/* <span>内容：</span> */}
                                    <input
                                        type="text"
                                        value={this.state.job}
                                        onChange={(e) => { this.onChangeContent(e) }}
                                        style={{paddingLeft:"5px"}}
                                    />
                                </li>
                                <li>
                                    <span style={{ textAlignLast: "justify", width: "25%" }}>完成时间</span>:
                                    <input
                                        type="text"
                                        value={this.state.phone}
                                        onChange={(e) => { this.onChangeFinishTime(e) }}
                                        style={{paddingLeft:"5px"}}
                                    />
                                </li>
                                <li>
                                    <span style={{ textAlignLast: "justify", width: "25%" }}>交割情况</span>:
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={(e) => { this.onChangeGive(e) }}
                                        style={{paddingLeft:"5px"}}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

