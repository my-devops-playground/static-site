module.exports = {
    apps : [{
        name   : "company-1-pre-superdope",
        script : "npm run-script build",
        log_type: "json",
        restart: true,
        out_file: "/var/log/builder/builder.info.json",
        error_file: "/var/log/builder/builder.error.json",
        log_date_format: "YYYY-MM-DD HH:mm:ss",
    }]
}
