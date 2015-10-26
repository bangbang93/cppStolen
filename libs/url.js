/**
 * Created by 伟航 on 15/10/27.
 */
'use strict';

module.exports = {
  Host_Url: "http://115.29.4.123:8080/",
  Code_Url: "loginregister/sendcode.ashx",
  Register_Url: "loginregister/register.ashx",
  Login_Url: "loginregister/login.ashx",
  ChangePw_Url: "loginregister/setpassword.ashx",
  Old_Url: "loginregister/getOldAccount.ashx",
  Banner_Url: "banner/getbannerlist.ashx",
  Eventlist_Url: "doujinshi/geteventlist.ashx",
  Typelist_Url: "doujinshi/gettypelist.ashx",
  Books_Url: "doujinshi/getdoujinshilist.ashx",
  BooksDetail_Url: "doujinshi/getdoujinshidetail.ashx",
  Collect_Url: "doujinshi/likedoujinshi.ashx",
  CancelCollect_Url: "doujinshi/unlikedoujinshi.ashx",
  Report_Url: "doujinshi/reportdoujinshi.ashx",
  ThemeAci: "event/getEventList.ashx",
  MeCollect: "collect/getUserCollectDoujinshi.ashx",
  ThemeUrl: "theme/getsectiontype.ashx",
  ZhuanquUrl: "doujinshi/getdoujinshilist.ashx",
  ActiDetailUrl: "event/getEventDetail.ashx",
  Company_Url: "event/getEventNewsList.ashx",
  BoothList_Url: "circle/getEventList.ashx",
  OneBoothList_Url: "circle/getcirclelist.ashx",
  ChangeOneDay_Url: "circle/getchangeeventlist.ashx",
  BoothDetail_Url: "circle/getcircledetail.ashx",
  BoothDetailList_Url: "circle/getCircleDoujinshiList.ashx",
  Liked_Url: "circle/likecircle.ashx",
  CancelLiked_Url: "circle/unlikecircle.ashx",
  MessOne_Url: "message/getsysMessageList.ashx",
  MessTwo_Url: "message/getEventMessageList.ashx",
  MessThree_Url: "message/getuserMessageList.ashx",
  BugTicke_Url: "ticket/getticketmainlist.ashx",
  MeUser_Url: "user/getUserDetail.ashx",
  Focus_Url: "collect/islikeduser.ashx",
  FocusLike_Url: "collect/likeuser.ashx",
  UnFocusLike_Url: "collect/unlikeuser.ashx",
  Person_Url: "user/getUserBasic.ashx",
  FocusList_Url: "collect/getusercollectuserandcircle.ashx",
  FocusUserMes_Url: "user/getUserCollectUserList.ashx",
  UserClub_Url: "user/getUserCircle.ashx",
  ChangeData_Url: "user/updateuser.ashx",
  UploadeData_Url: "user/uploadpic.ashx",
  MesList_Url: "user/getLetterMainList.ashx",
  MesListDetail_Url: "user/getLetterDetailList.ashx",
  SendMes_Url: "user/sendLetter.ashx",
  UnreadMes_Url: "user/getLetterUncheckedCount.ashx",
  ReadMes_Url: "user/checkletter.ashx",
  UploadBg_Url: "user/uploadbackground.ashx",
  ChangePhone_Url: "http://webservice.comicup.cn/user/updateusermobile.ashx",
  ChangePass_Url: "loginregister/ChangePassword.ashx",
  MeMess_Url: "user/getcollectedusermessagelist.ashx",
  SeekAuthor_Url: "search/getAuthorList.ashx",
  SeekAci_Url: "search/getEventList.ashx",
  OffLineMap_Url: "map/getmap.ashx",
  OffLineList_Url: "user/getUserCollectDoujinshiListDetail.ashx",
  IdeaBack_Url: "system/sendsuggest.ashx",
  OldCollect_Url: "doujinshi/likeAlldoujinshi.ashx",
  NotMessThree_Url: "message/getusermessageuncheckedcount.ashx",
  NotMessTwo_Url: "message/geteventmessageuncheckedcount.ashx",
  ReadMessThree_Url: "message/checkUserMessage.ashx",
  ReadMessTwo_Url: "message/checkEventMessage.ashx",
  FocusClub_Url: "circle/likecircleall.ashx",
  Aci_Url: "ticket/gettickettype.ashx",
  Bug_Url: "ticket/buyticket.ashx",
  BugList_Url: "ticket/getorderlist.ashx",
  OrderList_Url: "ticket/getorder.ashx",
  Shenqing_Url: "circle/joinCircle.ashx",
  TanWei_Url: "circle/getcirclemembersdoujinshilist.ashx",
  Idea_Url: "theme/getsectiontypealllist.ashx",
  Sell_Url: "doujinshi/consignDoujinshiAll.ashx",
  Commit_Url: "event/orderposition.ashx",
  GuanLi_Url: "message/getjoinMessageList.ashx",
  Join_Url: "circle/agreeCircle.ashx",
  Desc_Url: "circle/denyCircle.ashx",
  MeJoin_Url: "user/getusercirclelist.ashx",
  OutClub_Url: "system/leaveCircle.ashx",
  AlipayBug_Url: "ticket/buyticketalipay.ashx",
  GardenHost_Url: "http://webservice.comicup.cn/",
  Gardenbanner_Url: "worksrecommend/getBannerList.ashx/",
  Gardenrec_Url: "worksrecommend/getRecommendlist.ashx/",
  Gardenrectoday_Url: "worksrecommend/getDailiRecommend.ashx/",
  GardenrList_Url: "worksrecommend/getDailyWorksList.ashx/",
  GardenrHot_Url: "worksnewest/gethotest.ashx/",
  HotList_Url: "worksnewest/getNewestTag.ashx/",
  NewList_Url: "worksnewest/getNewestWorksList.ashx/",
  talkList_Url: "workssubscription/getUserSubscriptionList.ashx/",
  GarFocusList_Url: "WorksSubscription/getLikedWorksList.ashx/",
  BenREPOcontent_Url: "worksrepo/getWorksHotest.ashx/",
  BenREPOlist_Url: "worksrepo/getrepo.ashx/",
  Taglist_Url: "/worksrepo/getEventList.ashx/",
  TagREPOlist_Url: "worksrepo/getrepotag.ashx/",
  TakeREPO_Url: "worksrepo/getrepotagdetail.ashx/",
  Takeclick_Url: "WorksSubscription/subscript.ashx/",
  UNTakeclick_Url: "WorksSubscription/unsubscript.ashx/"
};
