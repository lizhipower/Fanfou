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
 * Created by ZhiLI on 2016/3/23.
 */
public class GetAPI {
    private String url;
    private InputStream in;

    public GetAPI(String url) {
        this.url = url;
        this.in = this.getAPI();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public InputStream getIn() {
        return in;
    }

    public void setIn(InputStream in) {
        this.in = in;
    }

    private InputStream getAPI() {
        InputStream in = new InputStream() {
            @Override
            public int read() throws IOException {
                return 0;
            }
        };
        try{
            HttpGet httpGet = new HttpGet(this.getUrl());
            DefaultHttpClient httpClient = new DefaultHttpClient();//实例化客户端对象
            HttpResponse httpResponse = httpClient.execute(httpGet);//实例化响应对象
            HttpEntity httpEntity = httpResponse.getEntity();//获得响应中的数据并存储
            in = httpEntity.getContent();//获得数据内容

        }catch(IOException e){

            System.out.println(e);
        }
        return in;
    }
}
