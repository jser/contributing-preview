# jser/contributing-preview

記事元のJSONデータをJSer.infoと同じ形式表示する補助ツールです。

- [jser/jser.info](https://github.com/jser/jser.info)
- [jser/contributing](https://github.com/jser/contributing)

## Usage

1. Open http://jser.info/contributing-preview/
2. Input `JSON` data.

`Save as Permanent link` から入力したデータをURLとして保存できます。

入力するデータは[JSer.info Pull Request Form](http://jser.info/contributing/ "JSer.info Pull Request Form")が生成するJSONと同じものです。

```json
{
    "title": "サイトタイトル",
    "url": "http://example.com/",
    "content": "説明文",
    "date": "2015-09-23T07:06:00.112Z",
    "tags": [
        "tag"
    ],
    "relatedLinks": []
}
```

[JSer.info Pull Request Form](http://jser.info/contributing/ "JSer.info Pull Request Form")で作ったJSONの断片を確認する単独で確認する用途でもあります。

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT