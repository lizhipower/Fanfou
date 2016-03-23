package fanfou.util;

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
public class GetBlogs extends GetAPI{
    private String blogs;
    public GetBlogs(String url) {
        super(url);
        this.blogs = this.ajaxBlogs(super.getIn());
    }

    public String getBlogs() {
        return blogs;
    }

    private String ajaxBlogs(InputStream in) {
        String lineChs = "";
        try{
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
        String fanfouBlogUrl = "http://api.fanfou.com/statuses/user_timeline.json?id=默涵井夜";

        GetBlogs gb = new GetBlogs(fanfouBlogUrl);
        String blogs = gb.getBlogs();
        System.out.println(blogs);
    }


}
