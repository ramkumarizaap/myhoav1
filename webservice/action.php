<?php


$con = mysqli_connect("localhost","izaapinn_ramhoa","RamHoa1!");
mysqli_select_db($con,"izaapinn_ramhoa");

$action = $_REQUEST['action'];

switch ($action)
{
	case 'register':
		$ins['firstname'] = $_REQUEST['firstname'];
		$ins['lastname'] = $_REQUEST['lastname'];
		$ins['email'] = $_REQUEST['email'];
		$ins['username'] = $_REQUEST['username'];
		$ins['password'] = $_REQUEST['password'];
		$ins['mobile'] = $_REQUEST['mobile'];
		$ins['community_id'] = get_community_code($_REQUEST['communitycode']);
		$ins['usertype'] = 1;
		$ins['code'] = 0;
		$ins['published'] = 0;
		$ins['created_date'] = date("Y-m-d H:i:s");
		$ins_id = insert($ins,"hoa_users");
		if($ins_id)
		{
			$output['status'] = "success";
			$output['user_id'] = $ins_id;
			$output['msg'] = "User registered successfully.";
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "User not registered.";	
		}
		break;
	case 'community_check':
		$code = $_REQUEST['communitycode'];
		$sql = select_single(array("code"=>$code),"hoa_community");
		if($sql)
		{
			$output['status'] = "success";
			$output['msg'] = "Community Available";
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "Community not Available";	
		}
	break;
	case 'login':
		$username = $_REQUEST['username'];
		$password = $_REQUEST['password'];
		$sql = select_single(array("username"=>$username,"password"=>$password),"hoa_users");
		if($sql)
		{
			$output['status'] = "success";
			$output['msg'] = $sql;
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "Invalid Username or Password";	
		}
	break;
	case 'profile':
  	$file_loc = $_FILES['file']['tmp_name'];
   	$filename = uniqid()."-user.png";
   	if(!file_exists("uploads/avatars/".$_REQUEST['user_id']."/"))
   	{
   		mkdir("uploads/avatars/".$_REQUEST['user_id'],0777);
   	}
   	$folder="uploads/avatars/".$_REQUEST['user_id']."/".$filename;
   	move_uploaded_file($file_loc,$folder);
   	$output['status'] 	= 'success';
   	$output['msg'] 	= "Form submited successfully!";
  break;
  case 'postfeed':
  	$ins['message'] = $_REQUEST['message'];
  	$ins['community_id'] = get_community_id($_REQUEST['user_id']);
  	$ins['creator_id'] = $_REQUEST['user_id'];
  	$ins['status'] = 0;
  	$ins['created_date'] = date("Y-m-d H:i:s");
  	$ins_id = insert($ins,"hoa_activity_stream");
		if($ins_id)
		{
			$output['status'] = "success";
			$output['row_id'] = $ins_id;
			$output['msg'] = "Posted successfully.";
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "Feed not posted.";	
		}
  break;
  case 'feedupload':
  	$file_loc = $_FILES['file']['tmp_name'];
   	$row_id = $_REQUEST['row_id'];
   	$type = $_REQUEST['type'];
   	if(!file_exists("uploads/feeds/".$_REQUEST['user_id']."/images/"))
   	{
   		mkdir("uploads/feeds/".$_REQUEST['user_id'],0777);
   		mkdir("uploads/feeds/".$_REQUEST['user_id']."/images",0777);
   		mkdir("uploads/feeds/".$_REQUEST['user_id']."/videos",0777);
   	}
   	if($type=="image")
   	{
   		$filename = uniqid()."-user.png";
   		$folder="uploads/feeds/".$_REQUEST['user_id']."/images/".$filename;
   		$up['photo'] = "http://162.144.41.156/~izaapinn/ram/".$folder;
   	}
   	else
   	{
   		$filename = uniqid()."-user.mp4";
   		$folder = "uploads/feeds/".$_REQUEST['user_id']."/videos/".$filename;
   		$up['video'] = "http://162.144.41.156/~izaapinn/ram/".$folder;
   	}
   	move_uploaded_file($file_loc,$folder);
   	$update = update(array("id"=>$row_id),$up,"hoa_activity_stream");
   	$output['status'] 	= 'success';
   	$output['msg'] 	= "Form submited successfully!";
  break;
  case 'classifiedupload':
  	$file_loc = $_FILES['file']['tmp_name'];
  	$row_id = $_REQUEST['row_id'];
   	if(!file_exists("uploads/classifieds/".$_REQUEST['row_id']."/"))
   	{
   		mkdir("uploads/classifieds/".$_REQUEST['row_id'],0777);
   	}
   	$filename = uniqid()."-classified.png";
   	$folder="uploads/classifieds/".$_REQUEST['row_id']."/".$filename;
   	if(move_uploaded_file($file_loc,$folder))
   	{
   		$photo = "";
   		$ph = select_single(array("id"=>$row_id),"hoa_classifieds");
   		if($ph['photos']!='')
   		{
   			$photo = $ph['photos'].",";
   		}
   		$up['photos'] = $photo."http://162.144.41.156/~izaapinn/ram/".$folder;
   		$update = update(array("id"=>$row_id),$up,"hoa_classifieds");
   		$output['status'] 	= 'success';
   		$output['msg'] 	= "Uploaded successfully!";
   	}
   	
  break;
  case 'get_feed':
  	$user_id = $_REQUEST['userid'];
  	$sql = get_feed($user_id,"hoa_activity_stream");
  	if($sql)
		{
			$output['status'] = "success";
			$output['msg'] = $sql;
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "No Feeds Found.";	
		}
  break;
  case 'get_comments':
  	$id = $_REQUEST['stream_id'];
  	$sql = get_comments($id);
  	if($sql)
		{
			$output['status'] = "success";
			$output['msg'] = $sql;
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "No Comments Found.";	
		}
  break;
  case 'postcomment':
  	$ins['comments'] = $_REQUEST['cmt'];
  	$ins['user_id'] = $_REQUEST['user_id'];
  	$ins['stream_id'] = $_REQUEST['stream_id'];
  	$ins['created_date'] = date("Y-m-d H:i:s");
  	$ins_id = insert($ins,"hoa_stream_comments");
		if($ins_id)
		{
			$output['status'] = "success";
			$output['row_id'] = $ins_id;
			$output['msg'] = "Comment posted successfully.";
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "Comment not posted.";	
		}
  break;
  case 'postlike':
  	$ins['user_id'] = $_REQUEST['user_id'];
  	$ins['stream_id'] = $_REQUEST['stream_id'];
  	$ins['created_date'] = date("Y-m-d H:i:s");
  	$ins_id = insert($ins,"hoa_stream_likes");
		if($ins_id)
		{
			$output['status'] = "success";
			$output['row_id'] = $ins_id;
			$output['msg'] = "Comment posted successfully.";
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "Comment not posted.";	
		}
  break;
  case 'post_classified':
  	$ins['user_id'] = 1;//$_REQUEST['user_id'];
  	$ins['ad_name'] = $_REQUEST['adname'];
  	$ins['description'] = $_REQUEST['description'];
  	$ins['street1'] = $_REQUEST['street1'];
  	$ins['street2'] = $_REQUEST['street2'];
  	$ins['city'] = $_REQUEST['city'];
  	$ins['state'] = $_REQUEST['state'];
  	$ins['country'] = $_REQUEST['country'];
  	$ins['zipcode'] = $_REQUEST['zipcode'];
  	$address = $ins['street1']." ".$ins['street2']." ".$ins['city']." ".$ins['state']." ".$ins['country']." ".$ins['zipcode'];
  	$ins['created_date'] = date("Y-m-d H:i:s");
  	$latlng = get_lat_long($address);
  	$latlng = explode(",", $latlng);
  	$ins['latitude'] = $latlng[0];
  	$ins['longitude'] = $latlng[1];
  	$ins_id = insert($ins,"hoa_classifieds");
		if($ins_id)
		{
			$output['status'] = "success";
			$output['row_id'] = $ins_id;
			$output['msg'] = "Classified posted successfully.";
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "Classified not posted.";	
		}
  break;
  case 'get_classified':
  	// $user_id = $_REQUEST['userid'];
  	$sql = get_classifieds("","hoa_classifieds");
  	if($sql)
		{
			$output['status'] = "success";
			$output['msg'] = $sql;
		}
		else
		{
			$output['status'] = "failed";
			$output['msg'] = "No Classifieds Found.";	
		}
  break;
  case 'get_classified_by_id':
  	$id = $_REQUEST['id'];
  	$res = get_classified_by_id($id,"hoa_classifieds");
  	if($res)
  	{
  		$output['status'] = "success";
			$output['msg'] = $res;
  	}
  	else
  	{
  		$output['status'] = "failed";
			$output['msg'] = "No Classified Found.";	
  	}
  break;
   	// echo json_encode($output);
	case 'db':
		$sql = mysqli_query($con,"ALTER TABLE `hoa_users`  CHANGE `code` community_id int(11);");
		// echo $sql;exit;
	break;
	default:
		
		break;
}

echo json_encode($output);

function get_lat_long($address)
{
	 $address = str_replace(" ", "+", $address);

    $json = file_get_contents("http://maps.google.com/maps/api/geocode/json?address=$address&sensor=false&region=$region");
    $json = json_decode($json);
    $lat = $json->results[0]->geometry->location->lat;
    $long = $json->{'results'}[0]->{'geometry'}->{'location'}->{'lng'};
    return $lat.','.$long;
}
function insert($data,$table)
	{
		global $con;
		$field="";$val="";
		foreach ($data as $key => $value)
		{
			$field .= $key.",";
			$val .= "'".$value."',";
		}
		$insert_id = mysqli_query($con,"insert into $table (".trim($field,",").") values(".trim($val,",").")");
		return mysqli_insert_id($con);
	}
	function update($where,$data,$table)
	{
		global $con;
		$field="";$val="";
		if($where)
		{
			$txt = "where ";
			foreach ($where as $key => $value)
			{
				$cond .= $key."='".$value."' and ";
			}
			$cond = $txt.trim($cond,'and ');
		}
		foreach ($data as $key => $value)
		{
			$field .= $key."='".$value."',";
		}
  	$update_id = mysqli_query($con,"update $table set ".trim($field,",")." $cond");
		return $update_id;
	}
	function delete($where,$table)
	{
		global $con;
		$field="";$val="";
		if($where)
		{
			$txt = "where ";
			foreach ($where as $key => $value)
			{
				$cond .= $key."='".$value."' and ";
			}
			$cond = $txt.trim($cond,'and ');
		}
		$del = mysqli_query($con,"delete from $table $cond");
		return $del;
	}
	function create($sql)
	{
		global $con;
		$create = mysqli_query($con,$sql);
		return $create;
	}

	function select_single($where='',$table)
	{
		$cond="";
		if($where)
		{
			$txt = "where ";
			foreach ($where as $key => $value)
			{
				$cond .= $key."='".$value."' and ";
			}
			$cond = $txt.substr_replace($cond,'',-4);
		}
		global $con;
		$row = mysqli_query($con,"select * from $table $cond");
		$q = mysqli_fetch_assoc($row);
		return $q;
	}
	function select_multiple($where='',$table)
	{
		$cond="";
		if($where)
		{
			$txt = "where ";
			foreach ($where as $key => $value)
			{
				$cond .= $key."='".$value."' and";
			}
			$cond = $txt.trim($cond,'and');
		}
		global $con;
		$result = array();$i=0;
		$row = mysqli_query($con,"select * from $table $cond");
		while($q = mysqli_fetch_assoc($row))
		{
			$result[$i++] = $q;
		}
		return $result;
	}
	function get_community_id($user_id='')
	{
		global $con;
		$sql = mysqli_query($con,"select community_id from hoa_users where id='".$user_id."'");
		$r = mysqli_fetch_assoc($sql);
		return $r['community_id'];
	}
	function get_community_code($code='')
	{
		global $con;
		$sql = mysqli_query($con,"select id from hoa_community where code='".$code."'");
		$r = mysqli_fetch_assoc($sql);
		return $r['id'];
	}

	function get_feed($user_id,$table)
	{
		global $con;$resukt = [];$i=0;
		$query = mysqli_query($con,"SELECT a.*,b.firstname,count(distinct c.id) as cmt_count,count(distinct d.id) as like_count FROM hoa_activity_stream a LEFT JOIN hoa_users b ON (a.creator_id=b.id) LEFT JOIN hoa_stream_comments c ON a.id = c.stream_id LEFT JOIN hoa_stream_likes d ON a.id = d.stream_id WHERE a.creator_id='".$user_id."' GROUP by a.id ORDER BY a.created_date DESC");
		if(mysqli_num_rows($query) > 0)
		{
			while ( $r = mysqli_fetch_assoc($query)) 
			{
				$var = "not liked";
				$sql1= mysqli_query($con,"select user_id from hoa_stream_likes where user_id='".$user_id."' and stream_id='".$r['id']."'");
				if(mysqli_num_rows($sql1) > 0)
					$var = "liked";
				$result[$i]['id'] = $r['id'];
				$result[$i]['community_id'] = $r['community_id'];
				$result[$i]['creator_id'] = $r['creator_id'];
				$result[$i]['message'] = $r['message'];
				$result[$i]['status'] = $r['status'];
				$result[$i]['photo'] = $r['photo'];
				$result[$i]['video'] = $r['video'];
				$result[$i]['cmt_count'] = $r['cmt_count'];
				$result[$i]['like_count'] = $r['like_count'];
				$result[$i]['liked'] = $var;
				$result[$i]['created_date'] = date("F d,Y",strtotime($r['created_date']));
				$result[$i]['firstname'] = $r['firstname'];
				$i++;
			}
		}
		return $result;
	}
	function get_comments($id)
	{
		global $con;$result = [];$i=0;
		$query = mysqli_query($con,"select a.created_date,a.comments,c.firstname from hoa_stream_comments a,hoa_activity_stream b,hoa_users c where a.stream_id=b.id and a.user_id=c.id and b.id='".$id."' order by a.created_date desc");
		if(mysqli_num_rows($query) > 0)
		{
			while ( $r = mysqli_fetch_assoc($query)) 
			{
				$result[$i]['id'] = $r['id'];
				$result[$i]['firstname'] = $r['firstname'];
				$result[$i]['comments'] = $r['comments'];
				$result[$i]['created_date'] = date("F d,Y H:i:s",strtotime($r['created_date']));
				$i++;
			}
		}
		return $result;
	}

	function get_classifieds($id)
	{
		global $con;$result = [];$i=0;
		$query = mysqli_query($con,"select * from hoa_classifieds");
		if(mysqli_num_rows($query) > 0)
		{
			while ( $r = mysqli_fetch_assoc($query)) 
			{
				$img = explode(",",$r['photos']);
				$result[$i]['id'] = $r['id'];
				$result[$i]['adname'] = $r['ad_name'];
				$result[$i]['description'] = $r['description'];
				$result[$i]['photo'] = $img[0];
				$result[$i]['street1'] = $r['street1'];
				$result[$i]['street2'] = $r['street2'];
				$result[$i]['city'] = $r['city'];
				$result[$i]['state'] = $r['state'];
				$result[$i]['country'] = $r['country'];
				$result[$i]['zipcode'] = $r['zipcode'];
				$result[$i]['created_date'] = date("F d,Y H:i:s",strtotime($r['created_date']));
				$i++;
			}
		}
		return $result;
	}
	function get_classified_by_id($id)
	{
		global $con;$result = [];$i=0;$img1 = [];
		$query = mysqli_query($con,"select a.*,b.firstname,b.email,b.mobile from hoa_classifieds a,hoa_users b where a.user_id=b.id and a.id=".$id);
		if(mysqli_num_rows($query) > 0)
		{
			$r = mysqli_fetch_assoc($query);
			$img = explode(",",$r['photos']);
			foreach ($img as $key => $value)
			{
				$img1[][src] = $value;
			}
			$result['id'] = $r['id'];
			$result['firstname'] = $r['firstname'];
			$result['email'] = $r['email'];
			$result['mobile'] = $r['mobile'];
			$result['adname'] = $r['ad_name'];
			$result['description'] = $r['description'];
			$result['photo'] = $img1;
			$result['street1'] = $r['street1'];
			$result['street2'] = $r['street2'];
			$result['city'] = $r['city'];
			$result['state'] = $r['state'];
			$result['country'] = $r['country'];
			$result['zipcode'] = $r['zipcode'];
			$result['latitude'] = $r['latitude'];
			$result['longitude'] = $r['longitude'];
			$now = date("Y-m-d H:i:s");
			$created = date("Y-m-d H:i:s",strtotime($r['created_date']));
			$result['created_date'] = datediff($now,$created);
		}
		return $result;
	}
	function datediff($date1,$date2)
	{
		$seconds = strtotime($date1) - strtotime($date2);
		$days    = floor($seconds / 86400);
		$hours   = floor(($seconds - ($days * 86400)) / 3600);
		$minutes = floor(($seconds - ($days * 86400) - ($hours * 3600))/60);
		$seconds = floor(($seconds - ($days * 86400) - ($hours * 3600) - ($minutes*60)));
		if($days>0)
			$output = $days. " day(s) ago";
		else if($hours>0)
			$output = $hours. " hour(s) ago";
		else if($minutes>0)
			$output = $minutes. " minute(s) ago";
		else if($seconds>50)
			$output = "just now";
		
		return $output;
	}

?>