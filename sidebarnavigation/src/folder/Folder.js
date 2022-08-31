import React, { useState } from 'react';

function Folder({explorer}) {
    const [expand, setExpand] = useState(false);
    if(explorer.isFolder) {
        return (
            <div>
                 <span onClick={() => setExpand(!expand)}>
                     <img src='./folder.png' style={{height:"20px", width:"20px", paddingRight:"auto", margin:"0px"}}/>{explorer.name}
                     <br/>
                 </span>
                 <div style={{display: expand ? "block" : "none", paddingLeft:"15px"}}>
                     {explorer.items.map((exp) => {
                         return <Folder explorer={exp}/>
                     })}
                 </div>
            </div>
           );
    } else {
        return (
        <>
            <img src='./file.png' style={{height:"20px", width:"20px", paddingRight:"auto", margin:"0px"}}/>
            <span>
                {explorer.name}
            </span>
            <br/>
        </>)
    }
  
}

export default Folder;
