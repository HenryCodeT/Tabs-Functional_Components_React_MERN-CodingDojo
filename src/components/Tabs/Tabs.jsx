import React,{useState} from 'react';

const Tabs = ({tabs}) => {
    
    const [tab, setTab] = useState(tabs[0]);

    const onClickHandle = (e,item) =>{
        setTab(item)
    }

    return(
        <div className='col-8 mx-auto m-2 p-2'>
            {
                tabs.map((item,index)=>{
                    return(
                        <button className={`mx-2 btn btn-outline-warning btn-lg ${tab.name === item.name ? 'active':''}`} key={index} onClick={(e)=>onClickHandle(e,item)}>{item.name}</button>
                    );
                })
            }
            <div className='border border-dark'>
                <h2>{tab.content}</h2>
            </div>
        </div>
    );       
}
export default Tabs;