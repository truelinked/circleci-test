async function migrate() {
    for (var i = 0; i < 30; i++) {
        console.log(`Migrating table ${i + 1}`)
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log(`Migration done`)
}

migrate()