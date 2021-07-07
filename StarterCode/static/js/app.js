function dropdown(){
    d3.json("samples.json").then((data)=>{
        var idlist=data.names;
        var dropdown=d3.select("#selDataset");
        idlist.forEach((sample)=>{
            dropdown.append("option")
            .text(sample)
            .property("value",sample);
        })
        var id=idlist[0];
        demographic(id);
    }) 
}

dropdown()



    function demographic(sampleid){
        d3.json("samples.json").then((data)=>{
            var metadata=data.metadata;
            var metaresult=metadata.filter(row=>row.id==sampleid);
        var result=metaresult[0];
        var samplemetadata = d3.select("#sample-metadata");
        samplemetadata.html("");
        Object.entries(result).forEach(([key,value])=>{
            samplemetadata.append("h6").text(`${key.toUpperCase()}: ${value}`);
        })
        

        })
}
    function optionChanged(sampleid){
        demographic(sampleid);

    }


    function plot(sampleid){
        d3.json("samples.json").then((data)=>{
            var sampledata=data.samples;
            var sampleresult=sampledata.filter(row=>row.id==sampleid);
        var result=sampleresult[0];
        var otu_ids = result.otu_ids;
        var samples_values = result.sample_values;
        var otu_lables = result.otu_lables;
    
    }