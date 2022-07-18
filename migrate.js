async function migrate() {
    for (var i = 0; i < 300; i++) {
        console.log(`Migrating table ${i + 1}`)
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log(`Migration done`)
}

migrate()