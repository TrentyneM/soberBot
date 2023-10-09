## using JS widget
<script type="text/javascript" src="https://cdn.statuspage.io/se-v2.js"></script>
<script>
  var sp = new StatusPage.page({ page : 'yh6f0r4529hb' });
  sp.summary({
    success : function(data) {
      console.log(data.components[0].status);
    }
  });
</script>

## using cURL
curl https://yh6f0r4529hb.statuspage.io/api/v2/summary.json