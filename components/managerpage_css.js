const Managerpage_CSS = () => {
  return (
    <style global jsx>{`
      body {
        margin: 0px;
        padding: 0px;
      }
      nava {
        text-align: center;
        background-color: black;
        width: 15vw;
        height: 100vh;
        position: fixed;
      }
      nava span {
        color: white;
        font-size: 1.2rem;
        padding-left: 31.7%;
        padding-right: 31.7%;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        border: none;
      }
      nava span:hover {
        background-color: #333333;
        cursor: pointer;
        text-decoration: underline;
      }
      .main_box{
        margin-top: 15vh;
      }
      .t_box {
        margin-top: 7vh;
      }
      .head2 { 
        position: absolute;
        margin-top: 15vh;
        margin-left: 55vw;
      }
      .user_info {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 50vw;
        height: 39vh;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin-top: 22vh;
        margin-left: 33vw;
        overflow: scroll;
      }
      .user_info button {
        float: right;
        background-color: black;
        color: white;
      }
      .user_info button:hover {
        cursor: pointer;
      }
      table.type05 {
        border-collapse: separate;
        border-spacing: 1px;
        text-align: left;
        line-height: 1.5;
        border-top: 1px solid #ccc;
        margin: 20px 10px;
      }
      table.type05 th {
        width: 150px;
        padding: 10px;
        font-weight: bold;
        vertical-align: top;
        border-bottom: 1px solid #ccc;
        background: black;
        color: white;
      }
      table.type05 td {
        width: 350px;
        padding: 10px;
        vertical-align: top;
        background: #efefef;
        border-bottom: 1px solid #ccc;
      }      
      .sales_info{
        display: flex;
        justify-content: row;
        position: absolute;
        width: 105px;
        height: 25px;
        text-align: center;
        margin-top: 45%;
        margin-left: 55%;
      }
      .sales_info span {
        padding: 5px;
        background-color: black;
        font-size: 14px;
        color: white;
      }
      .sales_info span:hover {
        background-color: #333333;
        cursor: pointer; 
      }
    `}</style>
  )
}

export default Managerpage_CSS