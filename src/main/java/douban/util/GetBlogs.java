package douban.util;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;


/**
 * Created by ZhiLI on 2016/3/22.
 */
public class GetBlogs {
    private String fanfouAPIUrl = "http://api.fanfou.com/statuses/user_timeline.json?id=默涵井夜";
    public String getBlogs() {
        String lineChs = "";
        try{
            HttpGet httpGet = new HttpGet(fanfouAPIUrl);
            DefaultHttpClient httpClient = new DefaultHttpClient();//实例化客户端对象
            HttpResponse httpResponse = httpClient.execute(httpGet);//实例化响应对象
            HttpEntity httpEntity = httpResponse.getEntity();//获得响应中的数据并存储
            InputStream in = httpEntity.getContent();//获得数据内容
            BufferedReader br = new BufferedReader(new InputStreamReader(in));//读取流
            String line = null;
            StringBuffer sb = new StringBuffer();
            while ((line = br.readLine()) != null) {


                sb.append(line);//此时的sb中的内容其实就是ＪＳＯＮ形式的字符串
            }


            String lineStr = sb.toString();
            Native2AsciiUtils ascii2Native = new Native2AsciiUtils();

            lineChs = ascii2Native.ascii2Native(lineStr);
//            System.out.println(lineChs);
        }catch(IOException e){

            System.out.println(e);
        }
//        System.out.println("eee");
        return lineChs;
    }

    public static void main(String[] args) {
        GetBlogs gb = new GetBlogs();
        gb.getBlogs();
    }


}
